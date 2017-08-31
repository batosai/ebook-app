/**
 * CollectionsController
 *
 * @description :: Server-side logic for managing collections
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  create: function (req, res) {
    var params = {
      title: req.body.title,
      image: req.body.image,
      library: req.body.library
    };

    Collection.create(params).exec(function (err, data) {
      if(err){
        return res.badRequest({
          error: err
        });
      } else {
        Collection.publishCreate(data);
        return res.json(data);
      }
    });
  },
  update: function (req, res) {
    var params = {
      title: req.body.title,
      image: req.body.image,
      library: req.body.library
    };

    Collection.update(req.params.id, params).exec(function (err, data) {
      if(err){
        return res.badRequest({
          error: err
        });
      } else {
        Collection.publishUpdate(data);
        return res.json(data);
      }
    });
  }
};
