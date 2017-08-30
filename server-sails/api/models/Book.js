/**
 * Book.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    title: {
      type: 'string',
      required: true
    },
    description: {
      type: 'string',
    },
    image: {
      type: 'string'
    },
    author: {
      type: 'string'
    },
    editor: {
      type: 'string'
    },
    formats: {
      type: 'string',
      enum: ['cbz', 'cbr', 'zip', 'rar', 'pdf', 'epub']
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
  }
};
// localhost:1337/books/create?title=Ultimate&collection=1
