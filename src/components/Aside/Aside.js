import React, { Component } from 'react';
import Footer from './Footer';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { updateBook } from '../../actions/items';
import { toogleUpdate } from '../../actions/list';
import './Aside.css';

import styles from './Aside.style';

class Aside extends Component {

  onDropTarget(link, e) {
    let item = JSON.parse(e.dataTransfer.getData("item"));

    item.collection = link.slug;
    this.props.updateBook(item, () => {
      this.props.toogleUpdate();
    });
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

function mapStateToProps(appState) {
  return appState;
}

export default connect(mapStateToProps, { updateBook, toogleUpdate })(Aside);
