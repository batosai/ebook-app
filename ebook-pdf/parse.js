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

class Parse {
  constructor(opt) {
    const fileInfo = Utils.exists(opt && opt.path ? opt.path : '');
    if (!fileInfo.ext) {
      fileInfo.ext = '';
    }

    return new Promise((resolve, reject) => {
      const fullPath = path.join(fileInfo.dir, fileInfo.base);

      exec(`pdfinfo '${fullPath}'`, (error, stdout, stderr) => {
        const data = Object.assign(fileInfo, fs.statSync(fullPath), this._parsePDFStdout(stdout));

        // Meta data
        data.meta = {};

        let without = Object.keys(data).filter(key => { return keys.map(key => key.prop).indexOf(key) === -1; });
        without.map(key => {

          data.meta[key] = data[key];
        });

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

  _parsePDFStdout(data){

    let masterObj = {};
    let lines = data.toString().split('\n').map(line => { return line.split(':'); }).map((line, idx) => {
      let obj = {},
        key = line[0].replace(':', '').replace(/ /g, ''),
        val = line[1] && line[1].length > 0 ? line[1].trim() : '';

      // Check for types
      val = key.toLowerCase().indexOf('date') > -1 && !isNaN(Date.parse(val)) ? new Date(val).getTime() : val;

      val = !isNaN(parseFloat(val)) && isFinite(val) ? parseFloat(val, 10) : val;

      val = val === 'yes' ? true : val;
      val = val === 'no' ? false : val;

      obj[key] = val;

      return obj;
    }).map((line) => {
      let key = Object.keys(line)[0];
      if (key.toString().length > 0){ masterObj[key] = line[key]; }

      return line;
    });

  return masterObj;
  }
}

module.exports = Parse;
