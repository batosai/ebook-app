var exec = require('child_process').exec;
var path = require('path');

class Extract {
  constructor(opt) {
    if (!opt.format) {
      opt.format = 'jpeg';
    }

    if (!opt.dest) {
      opt.dest = '';
    }
    else {
      opt.dest = `-o'${opt.dest}'`;
    }

    if (!opt.files) {
      opt.files = [];
    }

    return new Promise((resolve, reject) => {
      exec(`7z e '${opt.source}' ${opt.dest} '${opt.files.join(" ")}' -r`, (error, stdout, stderr) => {
        resolve(stdout);
      });
    });
  }
}

module.exports = Extract;
