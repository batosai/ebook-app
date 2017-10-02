const comicPDF = require('ebook-pdf');
const path = require('path');

module.exports = {
  create: function(filePath) {
    new comicPDF.parse({ path: filePath })
      .then(res => { if (res){
        const params = {
          title: res.name,
          filename: res.filename,
          extension: res.ext,
          numberPages: res.pages,
          size: res.size,
          type: 'pdf'
        }
        Book.findOrCreate({filename: params.filename}, params).exec((err, data) => {
          Book.update(data, params).exec(function afterwards(err, updated){
            if (!err) {
              sails.sockets.broadcast('sails_model_create_book', 'book', {verb: 'created', data});
            }
          });
        });
      }})
      .catch(err => { if (err){ sails.log('Failed!', err); } });
  },

  destroy: function(filePath) {
    Book.destroy({filename: path.basename(filePath)}).exec(err =>{
      if (err) {
        sails.log(err);
      }

      sails.log('removed');
    });
  },

  illustration: function(opt) {
    return new Promise((resolve, reject) => {
      new comicPDF.extract({
        source: opt.source,
        dest: opt.dest,
        first: 1,
        length: 1
      }).then(res => {
        resolve({
          file: `-001.jpg`
        });
      });
    });
  }
};

// pdftocairo -jpeg Walking\ Dead\ -\ T01.pdf
// pdftocairo -jpeg -f 1 -l 1 Walking\ Dead\ -\ T01.pdf
