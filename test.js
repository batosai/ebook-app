var path = require('path');
var comic = require('./ebook-archives');
var comicPDF = require('./ebook-pdf');

// const filePath = path.join(__dirname, './server-sails/data/SpiderMa.cbr');
const filePath2 = path.join(__dirname, './Walking Dead - T01.pdf');

// new comic({ path: filePath })
//   .then(res => { if (res){ console.log('Success!', res); } })
//   .catch(err => { if (err){ console.log('Failed!', err); } });
//
// new comicPDF({ path: filePath2 })
//   .then(res => { if (res){ console.log('Success!', res); } })
//   .catch(err => { if (err){ console.log('Failed!', err); } });


  new comicPDF.extract({
    source: filePath2,
    // dest: opt.dest,
    first: 1,
    length: 1
  }).then(res => console.log(res));
