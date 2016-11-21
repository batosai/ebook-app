
let items = [
  {
    id: '1',
    name: 'Hulk',
    image:'http://placehold.it/190x280',
    pageNumber: 39,
    type:'cbr',
    read:true,
    collection:'new-spiderman'
  },
  {
    id: '2',
    name: 'Iron man',
    image:'http://placehold.it/190x280/ff0000',
    pageNumber: 49,
    type:'pdf',
    read:true,
    collection:'avenger'
  },
  {
    id: '3',
    name: 'Daredevil',
    image:'http://placehold.it/190x280/ff0000',
    pageNumber: 50,
    type:'epub',
    read:true,
    collection:'spiderman'
  },
  {
    id: '4',
    name: 'Hulk',
    image:'http://placehold.it/190x280/ff0000',
    pageNumber: 39,
    type:'cbr',
    read:true,
    collection:'new-spiderman'
  },
  {
    id: '5',
    name: 'Iron man',
    image:'http://placehold.it/190x280/ff0000',
    pageNumber: 49,
    type:'pdf',
    read:true,
    collection:'new-spiderman'
  },
  {
    id: '6',
    name: 'Daredevil',
    image:'http://placehold.it/190x280/ff0000',
    pageNumber: 50,
    type:'epub',
    read:true,
    collection:'spiderman'
  },
  {
    id: '7',
    name: 'Daredevil',
    image:'http://placehold.it/190x280/ff0000',
    pageNumber: 50,
    type:'epub',
    read:true,
    collection:'spiderman'
  },
  {
    id: '8',
    name: 'Hulk',
    image:'http://placehold.it/190x280/ff0000',
    pageNumber: 39,
    type:'cbr',
    read:true,
    collection:'new-spiderman'
  },
  {
    id: '9',
    name: 'Iron man',
    image:'http://placehold.it/190x280/ff0000',
    pageNumber: 49,
    type:'pdf',
    read:true,
    collection:'avenger'
  },
  {
    id: '10',
    name: 'Daredevil',
    image:'http://placehold.it/190x280/ff0000',
    pageNumber: 50,
    type:'epub',
    read:true,
    collection:'spiderman'
  },
  {
    id: '11',
    name: 'Hulk',
    image:'http://placehold.it/190x280/ff0000',
    pageNumber: 39,
    type:'cbr',
    read:true,
    collection:'avenger'
  },
  {
    id: '12',
    name: 'Iron man',
    image:'http://placehold.it/190x280/ff0000',
    pageNumber: 49,
    type:'pdf',
    read:true,
    collection:'avenger'
  },
  {
    id: '13',
    name: 'Daredevil',
    image:'http://placehold.it/190x280/ff0000',
    pageNumber: 50,
    type:'epub',
    read:true,
    collection:'spiderman'
  },
  {
    id: '14',
    name: 'Daredevil',
    image:'http://placehold.it/190x280/ff0000',
    pageNumber: 50,
    type:'epub',
    read:true,
    collection:'spiderman'
  },
];

export const getItems = () =>
  new Promise(resolve => setTimeout(() => {
    resolve(items);
  }, 10));

export const getItemsByCollection = slug =>
  getItems()
  .then(items => items.filter(item => item.collection === slug));

export const getItem = id =>
  getItems()
  .then(items => items.find(item => item.id === id));

export const changeCollection = (id, collection) =>
  new Promise(resolve => setTimeout(() => {
    console.log(id, collection);
    let item = items.find(item => item.id === id);
    item.collection = collection;

    items.push(item);

    // items = Object.assign({}, items, { item }),
    resolve(items);
  }, 10));

// export const removeItem = id =>
//   getItems()
//   .then(items => items.find(item => item.id === id));
