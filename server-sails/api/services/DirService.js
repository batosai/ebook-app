var fs  = require("fs");
var path = require('path');

module.exports = {
  create: function(path){
    path = path.trim();
    if(!fs.existsSync(path)){
       fs.mkdirSync(path, 0766, (err) => {
         if(err){
           log.error('Can\'t make the directory %s!', path);
         }
       });
    }
  },
  destroy: function(path){
    path = path.trim();
    if(!fs.existsSync(path)){
       fs.rmdirSync(path);
    }
  }
}
