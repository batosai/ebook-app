/**
 * BookController
 *
 * @description :: Server-side logic for managing book
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  // _config: {
  //  shortcuts: false
  // },

  create: function (req, res) {
    var params = BookService.getParams(req.body);

    Book.create(params).exec(function (err, data) {
      if(err){
        return res.badRequest({
          error: err
        });
      } else {
        Book.publishCreate(data);
        return res.json(data);
      }
    });


    // if (req.method == "POST"){
    //   // perform slap action
    // } else {
    //   return res.status(404).json("Not found");
    // }
  },

  update: function (req, res) {
    var params = BookService.getParams(req.body);

    Book.update(req.params.id, params).exec(function (err, data) {
      if(err){
        return res.badRequest({
          error: err
        });
      } else {
        Book.publishUpdate(data);
        return res.json(data);
      }
    });
  }
};
