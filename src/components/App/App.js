import React, { Component } from 'react';
import Header from '../Header/Header';
import Aside from '../Aside/Aside';

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
  constructor (props) {
    super(props);

    this.state = { links };
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Aside links={ this.state.links } />
        { this.props.children }
      </div>
    );
  }
}

export default App;
