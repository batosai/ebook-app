import React, { Component } from 'react';
import '../Fonts/awesome.css';
import './Header.css';

import styles from './Header.style';

class Header extends Component {
  render() {
    return (
      <header style={ styles.content }>
        <h1 style={ styles.title }>e-book</h1>

        <ul style={ styles.list }>
          <li style={ styles.list.item }>
            <button style={ {...styles.btn, ...styles.btn.focus} } className="fontawesome-th"></button>
          </li>
          <li style={ styles.list.item }>
            <button style={ styles.btn } className="fontawesome-th-list"></button>
          </li>
          <li style={ {...styles.list.item, ...styles.list.item.last} }>
            <input style={ styles.search } className="Menu-search--placeholder" type="text" placeholder="Recherche" />
            <button style={ styles.btn } className="fontawesome-search"></button>
          </li>
        </ul>
      </header>
    );
  }
}

export default Header;
