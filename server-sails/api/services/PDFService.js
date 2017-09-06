var comicPDF = require('ebook-pdf');
var path = require('path');

module.exports = {
  create: function(filePath) {
    new comicPDF({ path: filePath })
      .then(res => { if (res){
        // sails.log('Success!', res);
        const params = {
          title: res.name,
          filename: res.filename,
          extension: res.ext,
          numberPages: res.pages,
          size: res.size,
          type: 'pdf'
        }
        Book.create(params).exec(function (err, data) {
            if (!err) {
              Book.publishCreate(data);
            }
        });
      }})
      .catch(err => { if (err){ sails.log('Failed!', err); } });
  },
  destroy: function(filePath) {
    Book.destroy({filename: path.basename(filePath)}).exec(function (err){
      if (err) {
        sails.log(err);
      }
      sails.log('removed');
    });
  }
};
