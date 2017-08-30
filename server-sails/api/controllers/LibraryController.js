/**
 * LibrariesController
 *
 * @description :: Server-side logic for managing libraries
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  create: function (req, res) {
    var params = {
      name: req.body.name
    };

    Library.create(params).exec(function (err, data) {
      if(err){
        return res.badRequest({
          error: err
        });
      } else {
        Library.publishCreate(data);
        return res.json(data);
      }
    });
  },
  update: function (req, res) {
    var params = {
      name: req.body.name
    };

    Library.update(req.params.id, params).exec(function (err, data) {
      if(err){
        return res.badRequest({
          error: err
        });
      } else {
        Library.publishUpdate(data);
        return res.json(data);
      }
    });
  }
};
