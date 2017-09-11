/**
 * Book.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
const fs = require('fs');
const path = require('path');

const cachePath = path.join(__dirname, '../../data/cache');
const uploadPath = path.join(__dirname, '../../data/uploads/books');

module.exports = {

  attributes: {
    title: {
      type: 'string',
      required: true
    },
    description: {
      type: 'string',
    },
    author: {
      type: 'string'
    },
    editor: {
      type: 'string'
    },
    extension: {
      type: 'string',
      enum: ['.cbz', '.cbr', '.cb7', '.cbt', '.zip', '.rar', '.pdf', '.epub']
    },
    type: {
      type: 'string',
      enum: ['archive', 'pdf', 'epub']
    },
    filename: {
      type: 'string',
    },
    size: {
      type: 'integer',
    },
    numberPages: {
      type: 'integer',
      columnName: 'number_pages'
    },
    numberVolumes: {
      type: 'integer',
      columnName: 'number_volumes'
    },
    year: {
      type: 'integer'
    },
    read: {
      type: 'boolean',
      defaultsTo: false
    },
    keyword: {
      type: 'array'
    },
    collection: { model: 'Collection' },
    getImage: function (){
      const p = `${cachePath}/${this.filename}/illustration.jpg`;
      return fs.existsSync(p) ? p : null;
    },

    getFullpath: function (){
      return `${uploadPath}/${this.filename}`;
    },
  },

  // Lifecycle Callbacks

  afterCreate: function (values, cb) {
    DirService.create(`${cachePath}/${values.filename}`);

    const opt = {
      source: `${uploadPath}/${values.filename}`,
      dest: `${cachePath}/${values.filename}/`
    };

    let service = null;

    switch (values.type){
      case 'pdf':
        service = PDFService;
      break;
      case 'archive':
        service = ArchiveService;
      break;
    }

    service.illustration(opt).then(res => {
      fs.rename(`${opt.dest}${res.file}`, `${opt.dest}illustration.jpg`);
    });
  }
};
// localhost:1337/books/create?title=Ultimate&collection=1
