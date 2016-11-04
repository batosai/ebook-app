
export const getItems = () =>
  new Promise(resolve => setTimeout(() => {
    resolve(
      ([
        {
          id: '1',
          name: 'Hulk',
          image:'http://placehold.it/190x280',
          pageNumber: 39,
          type:'cbr',
          read:true,
          collection:''
        },
        {
          id: '2',
          name: 'Iron man',
          image:'http://placehold.it/190x280/ff0000',
          pageNumber: 49,
          type:'pdf',
          read:true,
          collection:''
        },
        {
          id: '3',
          name: 'Daredevil',
          image:'http://placehold.it/190x280/ff0000',
          pageNumber: 50,
          type:'epub',
          read:true,
          collection:'Spiderman v1'
        },
        {
          id: '4',
          name: 'Hulk',
          image:'http://placehold.it/190x280/ff0000',
          pageNumber: 39,
          type:'cbr',
          read:true,
          collection:''
        },
        {
          id: '5',
          name: 'Iron man',
          image:'http://placehold.it/190x280/ff0000',
          pageNumber: 49,
          type:'pdf',
          read:true,
          collection:''
        },
        {
          id: '6',
          name: 'Daredevil',
          image:'http://placehold.it/190x280/ff0000',
          pageNumber: 50,
          type:'epub',
          read:true,
          collection:'Spiderman v1'
        },
        {
          id: '7',
          name: 'Daredevil',
          image:'http://placehold.it/190x280/ff0000',
          pageNumber: 50,
          type:'epub',
          read:true,
          collection:'Spiderman v1'
        },
        {
          id: '8',
          name: 'Hulk',
          image:'http://placehold.it/190x280/ff0000',
          pageNumber: 39,
          type:'cbr',
          read:true,
          collection:''
        },
        {
          id: '9',
          name: 'Iron man',
          image:'http://placehold.it/190x280/ff0000',
          pageNumber: 49,
          type:'pdf',
          read:true,
          collection:''
        },
        {
          id: '10',
          name: 'Daredevil',
          image:'http://placehold.it/190x280/ff0000',
          pageNumber: 50,
          type:'epub',
          read:true,
          collection:'Spiderman v1'
        },
        {
          id: '11',
          name: 'Hulk',
          image:'http://placehold.it/190x280/ff0000',
          pageNumber: 39,
          type:'cbr',
          read:true,
          collection:''
        },
        {
          id: '12',
          name: 'Iron man',
          image:'http://placehold.it/190x280/ff0000',
          pageNumber: 49,
          type:'pdf',
          read:true,
          collection:''
        },
        {
          id: '13',
          name: 'Daredevil',
          image:'http://placehold.it/190x280/ff0000',
          pageNumber: 50,
          type:'epub',
          read:true,
          collection:'Spiderman v1'
        },
        {
          id: '14',
          name: 'Daredevil',
          image:'http://placehold.it/190x280/ff0000',
          pageNumber: 50,
          type:'epub',
          read:true,
          collection:'Spiderman v1'
        },
      ])
    );
  }, 10));

export const getItem = id =>
  getItems()
  .then(items => items.find(item => item.id === id));
