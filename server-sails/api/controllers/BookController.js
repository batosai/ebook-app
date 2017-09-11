/**
 * BookController
 *
 * @description :: Server-side logic for managing book
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var fs = require('fs');
var path = require('path');

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

  }
};
