import React, { Component } from 'react';
import Footer from './Footer';
import { Link } from 'react-router';
import './Aside.css';

import styles from './Aside.style';

class Aside extends Component {

  onDropTarget(link, e) {
    var id = e.dataTransfer.getData("itemId");
    console.log(link.name, id);
    e.preventDefault();
  }

  renderLinks() {
    return this.props.links.map(link => (
      <li style={ styles.list.item } onDragOver={ (e) => e.preventDefault() } onDrop={ e => this.onDropTarget(link, e) } key={ link.id }>
        <Link to={ link.href } style={ styles.list.item.link } activeStyle={ styles.list.item.link.hover }>{ link.name }</Link>
      </li>
    ))
  }

  render() {
    return (
      <nav style={ styles.content }>
        <ul style={ styles.list }>
          { this.renderLinks() }
        </ul>
        <Footer />
      </nav>
    );
  }
}

Aside.propTypes = {
  links : React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
};

export default Aside;
