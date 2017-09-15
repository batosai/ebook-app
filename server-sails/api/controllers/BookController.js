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
        // const base64Data = req.body.image
        //   .replace(/^data:image\/jpeg;base64,/, "")
        //   .replace(/^data:image\/png;base64,/, "")
        // ;

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
  }
};
