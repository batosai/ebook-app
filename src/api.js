
let items = [
  {
    id: '1',
    name: 'Hulk',
    image:'http://placehold.it/190x280',
    pageNumber: 39,
    type:'cbr',
    read:true,
    collection:'new-spiderman',
tag:'new-spiderman',
description:'Post hoc impie perpetratum quod in aliis quoque iam timebatur, tamquam licentia crudelitati indulta per suspicionum nebulas aestimati quidam noxii damnabantur. quorum pars necati, alii puniti bonorum multatione actique laribus suis extorres nullo sibi relicto praeter querelas et lacrimas, stipe conlaticia victitabant, et civili iustoque imperio ad voluntatem converso cruentam, claudebantur opulentae domus et clarae.',
  },
  {
    id: '2',
    name: 'Iron man',
    image:'http://placehold.it/190x280/ff0000',
    pageNumber: 49,
    type:'pdf',
    read:true,
    collection:'avenger',
tag:'avenger',
description:'',
  },
  {
    id: '3',
    name: 'Daredevil',
    image:'http://placehold.it/190x280/ff0000',
    pageNumber: 50,
    type:'epub',
    read:true,
    collection:'spiderman',
tag:'spiderman',
description:'',
  },
  {
    id: '4',
    name: 'Hulk2',
    image:'http://placehold.it/190x280/ff0000',
    pageNumber: 39,
    type:'cbr',
    read:true,
    collection:'new-spiderman',
tag:'new-spiderman',
description:'',
  },
  {
    id: '5',
    name: 'Iron man',
    image:'http://placehold.it/190x280/ff0000',
    pageNumber: 49,
    type:'pdf',
    read:true,
    collection:'new-spiderman',
tag:'new-spiderman',
description:'',
  },
  {
    id: '6',
    name: 'Daredevil',
    image:'http://placehold.it/190x280/ff0000',
    pageNumber: 50,
    type:'epub',
    read:true,
    collection:'spiderman',
tag:'spiderman',
description:'',
  },
  {
    id: '7',
    name: 'Daredevil',
    image:'http://placehold.it/190x280/ff0000',
    pageNumber: 50,
    type:'epub',
    read:true,
    collection:'spiderman',
tag:'spiderman',
description:'',
  },
  {
    id: '8',
    name: 'Hulk3',
    image:'http://placehold.it/190x280/ff0000',
    pageNumber: 39,
    type:'cbr',
    read:true,
    collection:'new-spiderman',
tag:'new-spiderman',
description:'',
  },
  {
    id: '9',
    name: 'Iron man',
    image:'http://placehold.it/190x280/ff0000',
    pageNumber: 49,
    type:'pdf',
    read:true,
    collection:'avenger',
tag:'avenger',
description:'',
  },
  {
    id: '10',
    name: 'Daredevil',
    image:'http://placehold.it/190x280/ff0000',
    pageNumber: 50,
    type:'epub',
    read:true,
    collection:'spiderman',
tag:'spiderman',
description:'',
  },
  {
    id: '11',
    name: 'Hulk',
    image:'http://placehold.it/190x280/ff0000',
    pageNumber: 39,
    type:'cbr',
    read:true,
    collection:'avenger',
tag:'avenger',
description:'',
  },
  {
    id: '12',
    name: 'Iron man',
    image:'http://placehold.it/190x280/ff0000',
    pageNumber: 49,
    type:'pdf',
    read:true,
    collection:'avenger',
tag:'avenger',
description:'',
  },
  {
    id: '13',
    name: 'Daredevil',
    image:'http://placehold.it/190x280/ff0000',
    pageNumber: 50,
    type:'epub',
    read:true,
    collection:'spiderman',
tag:'spiderman',
description:'',
  },
  {
    id: '14',
    name: 'Daredevil',
    image:'http://placehold.it/190x280/ff0000',
    pageNumber: 50,
    type:'epub',
    read:true,
    collection:'spiderman',
tag:'spiderman',
description:'',
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

export const changeCollection = (item) =>
  new Promise(resolve => setTimeout(() => {
    const index = items.findIndex(i => i.id === item.id);

    if (index > -1) {
        items.splice(index, 1);
    }
    items.push(item);

    resolve(items);
  }, 10));

// export const removeItem = id =>
//   getItems()
//   .then(items => items.find(item => item.id === id));
