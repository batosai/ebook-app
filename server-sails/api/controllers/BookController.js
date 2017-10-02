/**
 * BookController
 *
 * @description :: Server-side logic for managing book
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

const fs = require('fs');
const path = require('path');
const isJpg = require('is-jpg');
const pngToJpeg = require('png-to-jpeg');

module.exports = {
  illustration: function(req, res) {
    res.set('Content-Type', 'image/jpeg');

    Book.findOne({id: req.param('id')}).exec(function (err, data) {
      if (data && data.getImage()) {
        fs.readFile(data.getImage(), function(err, data) {
          return res.send(new Buffer(data));
        });
      }
      else {
        res.notFound();
      }
    });
  },

  illustrationUpdate: function(req, res) {
    const cachePath = path.join(__dirname, '../../data/cache');

    Book.findOne({id: req.param('id')}).exec(function (err, data) {
      if (data) {
        const file = `${cachePath}/${data.filename}/illustration.jpg`;
        const base64Data = req.body.image.split(/,\s*/)[1];
        const buffer = new Buffer(base64Data, 'base64');

        if (isJpg(buffer)) {
          fs.writeFile(file, base64Data, 'base64', function(err) {
            sails.log(err);
          });
        }
        else {
          pngToJpeg({quality: 90})(buffer)
            .then(output =>
              fs.writeFileSync(file, output));
        }
      }
      else {
        res.notFound();
      }
    });
  },

  upload: function(req, res) {
    const uploadPath = path.join(__dirname, '../../data/uploads/books/');

    const base64Data = req.body.file.split(/,\s*/)[1];
    const buffer = new Buffer(base64Data, 'base64');

    Book.findOrCreate({filename:req.body.fileName},
      {title:req.body.fileName, filename:req.body.fileName, collection: req.body.collectionId}
    ).exec(function createFindCB(error, createdOrFoundRecords){
      fs.writeFile(`${uploadPath}${req.body.fileName}`, base64Data, 'base64', function(err) {
        sails.log(err);
      });
    });
  }
};
