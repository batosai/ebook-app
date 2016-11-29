import React, { Component } from 'react';
import Header from '../Header/Header';
import Aside from '../Aside/Aside';

import styles from './App.style';

class App extends Component {

  render() {
    return (
      <div className="App" style={ styles }>
        <Header />
        <Aside />
        { this.props.children }
      </div>
    );
  }
}

export default App;
