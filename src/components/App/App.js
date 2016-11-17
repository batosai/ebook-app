import React, { Component } from 'react';
import Header from '../Header/Header';
import Aside from '../Aside/Aside';

import styles from './App.style';

const links = [
  {
    id: 1,
    name: 'Spiderman',
    href: '/list/spiderman'
  },
  {
    id: 2,
    name: 'New All difference, spiderman all new difference',
    href: '/list/new-spiderman'
  },
  {
    id: 3,
    name: 'Avenger',
    href: '/list/avenger'
  },
];

class App extends Component {

  render() {
    return (
      <div className="App" style={ styles }>
        <Header />
        <Aside links={ links } />
        { this.props.children }
      </div>
    );
  }
}

export default App;
