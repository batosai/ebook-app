import React, { Component, PropTypes as T } from 'react';
import { connect } from 'react-redux';
import { toogleType } from '../../actions/list';

import '../Fonts/awesome.css';
import './Header.css';

import styles from './Header.style';

class Header extends Component {

  onToggle() {
    this.props.toogleType();
  }

  render() {
    return (
      <header style={ styles.content }>
        <h1 style={ styles.title }>e-book</h1>

        <ul style={ styles.list }>
          <li style={ styles.list.item }>
            <button style={ styles.btn } disabled={ this.props.type === 'collection' } onClick={ () => this.onToggle() } className="fontawesome-th"></button>
          </li>
          <li style={ styles.list.item }>
            <button style={ styles.btn } onClick={ () => this.onToggle() } disabled={ this.props.type === 'list' } className="fontawesome-th-list"></button>
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

Header.propTypes = {
  toogleType: T.func.isRequired,
  type: T.string,
};

function mapStateToProps(appState) {
  return {
    type: appState.list.type,
  };
}

export default connect(mapStateToProps, { toogleType })(Header);
