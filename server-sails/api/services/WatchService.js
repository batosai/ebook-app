const watch = require('watch');
// const fs = require('fs');
const path = require('path');

// const excludes = ['.DS_Store', 'Thumbs.db', 'ehthumbs.db', '.Trashes'];

// TODO:  Garder cache historique pour gagner du temps. (pochette info etc.)

module.exports = {
  launch: function() {

    filePath = path.join(__dirname, '../../data/uploads');

    // fs.watch(filePath, {recursive: true, persistent: false}, (eventType, filename) => {
    //   if (!excludes.filter(exclude => filename.search(exclude) !== -1).length) {
    //     // sails.log(`event type is: ${eventType}`);
    //     fs.exists(`${filePath}/${filename}`, (exists) => {
    //       if (exists) {
    //         sails.log(`Add ${filename}`);
    //       }
    //       else {
    //         sails.log(`Remove ${filename}`);
    //       }
    //     });
    //   }
    // });

    watch.watchTree(filePath, { ignoreDotFiles: true }, (f, curr, prev) => {
        if (typeof f == "object" && prev === null && curr === null) {
          // Finished walking the tree
        } else if (prev === null) {
          sails.log('new file');
            switch (path.extname(f)){
              case '.pdf':
                PDFService.create(f);
              break;
              case '.cbr':
              case '.cbz':
              case '.cb7':
              case '.cbt':
                ArchiveService.create(f);
              break;
            }
        } else if (curr.nlink === 0) {
          // f was removed
          switch (path.extname(f)){
            case '.pdf':
              PDFService.destroy(f);
            break;
            case '.cbr':
            case '.cbz':
            case '.cb7':
            case '.cbt':
              ArchiveService.destroy(f);
            break;
          }
        } else {
          // f was changed
          sails.log('changed');
        }
    });
  }
};
