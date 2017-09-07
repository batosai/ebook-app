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

    if (!opt.first) {
      opt.first = '';
    }
    else {
      opt.first = `-f ${opt.first}`;
    }

    if (!opt.length) {
      opt.length = '';
    }
    else {
      opt.length = `-l ${opt.length}`;
    }

    return new Promise((resolve, reject) => {
      exec(`pdftocairo -${opt.format} ${opt.first} ${opt.length} '${opt.source}' '${opt.dest}'`, (error, stdout, stderr) => {
        resolve(stdout);
      });
    });
  }
}

module.exports = Extract;
