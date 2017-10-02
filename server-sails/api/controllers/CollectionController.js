/**
 * CollectionController
 *
 * @description :: Server-side logic for managing collections
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

const fs = require('fs');

module.exports = {
  illustration: function(req, res) {
    res.set('Content-Type', 'image/jpeg');

    Book.findOne({where : {collection: req.param('id')}, sort: 'createdAt ASC'}).exec(function (err, data) {
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
};
