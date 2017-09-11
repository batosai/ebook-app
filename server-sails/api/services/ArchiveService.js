const comicArchives = require('ebook-archives');
const path = require('path');

module.exports = {
  create: function(filePath) {
    new comicArchives.parse({ path: filePath })
      .then(res => { if (res){
        // sails.log('Success!', res);
        const params = {
          title: res.name,
          filename: res.filename,
          extension: res.ext,
          numberPages: res.pages,
          size: res.size,
          type: 'archive'
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
  },

  illustration: function(opt) {
    return new Promise((resolve, reject) => {
      new comicArchives.parse({ path: opt.source })
        .then(res => {
          if (res) {
            const file = res.files.filter(
              file => file.attr.indexOf('D') === -1
            )[0];

            new comicArchives.extract({
              source: opt.source,
              dest: opt.dest,
              files: [file.name],
            }).then(res => {
              resolve({
                file: path.basename(file.name)
              });
            });
          }
        });
    });
  }
};


// 7z e 'Spider-Man v1 - 001.cbz' 'Spider-Man - v1 - 001.jpg' -r
