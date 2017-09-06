var path = require('path');
var comic = require('./ebook-archives');
var comicPdf = require('./ebook-pdf');

const filePath = path.join(__dirname, './server-sails/data/SpiderMa.cbr');
const filePath2 = path.join(__dirname, './server-sails/data/Walking Dead - T01.pdf');

new comic({ path: filePath })
  .then(res => { if (res){ console.log('Success!', res); } })
  .catch(err => { if (err){ console.log('Failed!', err); } });

new comicPdf({ path: filePath2 })
  .then(res => { if (res){ console.log('Success!', res); } })
  .catch(err => { if (err){ console.log('Failed!', err); } });
