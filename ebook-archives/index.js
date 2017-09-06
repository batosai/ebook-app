var exec = require('child_process').exec;
var path = require('path');
var fs = require('fs-extra');
var Utils = require('ebook-utils');

var keys = [
  { prop: 'dir' },
  { prop: 'base', renameTo: 'filename' },
  { prop: 'ext' },
  { prop: 'name' },
  { prop: 'size' },
  { prop: 'ctime', renameTo: 'created' },
  { prop: 'mtime', renameTo: 'modified' },
  { prop: 'Pages', renameTo: 'pages' },
  { prop: 'Encrypted', renameTo: 'encrypted', default: false },
  { prop: 'files', default: [] },
  { prop: 'meta' }
];

var excludes = ['.DS_Store', 'Thumbs.db', 'ehthumbs.db', '.Trashes'];

class Parse {
  constructor(opt, onData) {
    const fileInfo = Utils.exists(opt && opt.path ? opt.path : '');
    if (!fileInfo.ext) {
      fileInfo.ext = '';
    }

    return new Promise((resolve, reject) => {
      const fullPath = path.join(fileInfo.dir, fileInfo.base);

      exec(`7z l '${fullPath}'`, (error, stdout, stderr) => {
        const data = Object.assign(fileInfo, fs.statSync(fullPath), this._parseArchiveStdout(stdout));

        data.files = data.files.filter(
          file =>
            !excludes.filter(exclude => file.name.search(exclude) !== -1)
              .length
        );

        // pages
        data.Pages = data.files.filter(
          file => file.attr.indexOf('D') === -1
        ).length;

        resolve(this._getStandardProperties(data));
      });
    });
  }

  _getStandardProperties(raw){
    let parsedObject = {};

    // Standard File Info
    keys.map(key => {
      let val = !Utils.hasValue(raw[key.prop]) ? null : raw[key.prop];
      val = !val && key.default !== null ? key.default : val;

      parsedObject[(key.renameTo ? key.renameTo : key.prop)] = val;
    });

    return parsedObject;
  }

  _parseArchiveStdout(data){
    let lines = data.toString().split('\n');

    // Get meta data (header of 7z output)
    let meta = lines
      .filter(line => {
        return line.indexOf(' = ') > -1;
      })
      .map(line => {
        let retObj = {};
        retObj[line.split(' = ')[0]] = line.split(' = ')[1];
        return retObj;
      });

    let metaFixed = {};
    meta.map(obj => {
      metaFixed[Object.keys(obj)[0]] = obj[Object.keys(obj)[0]];
    });
    meta = Object.assign(metaFixed, {});

    // File listing
    let fileListing = [],
      headers = [],
      foundHeaders = false,
      foundFooter = false;

    for (let idx = 0; idx < lines.length; idx++) {
      let line = lines[idx];

      if (line.indexOf('----------------') > -1 && !foundHeaders) {
        // Titles or footer
        headers = lines[idx - 1].split(' ').filter(line => {
          return line.length > 0;
        });
        foundHeaders = true;
      } else if (
        line.indexOf('----------------') > -1 &&
        foundHeaders &&
        !foundFooter
      ) {
        foundFooter = true;
      } else if (foundHeaders && !foundFooter) {
        let parts = line.split(' ').filter(pt => {
            return pt.length > 0;
          }),
          fileObj = {};

        for (let pti = 0; pti < headers.length - 2; pti++) {
          fileObj[headers[pti].toLowerCase()] = Utils.isNumeric(parts[pti])
            ? parseInt(parts[pti], 10)
            : parts[pti];
        }

        fileObj[headers[5].toLowerCase()] = parts
          .slice(5, parts.length)
          .join(' ');

        // Add any missing properties (sometimes 'compressed' returns empty value)
        headers.map(header => {
          if (!fileObj[header.toLowerCase()]) {
            fileObj[header.toLowerCase()] = 0;
          }
        });

        fileListing.push(fileObj);
      }
    }

    return { meta: meta, files: fileListing };
  };
}

module.exports = Parse;
