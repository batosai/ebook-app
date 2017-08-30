module.exports = {
  getParams: function(body) {
    return {
      title: body.title,
      description: body.description,
      image: body.image,
      author: body.author,
      editor: body.editor,
      formats: body.formats,
      numberPages: body.numberPages,
      numberVolumes: body.numberVolumes,
      year: body.year,
      read: body.read,
      keyword: body.keyword,
      collection: body.collection,
    };
  }
};
