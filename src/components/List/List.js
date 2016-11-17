import React, { Component, PropTypes as T } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as Types from '../../types';
import { getBooks } from '../../actions/items';
import AnimateLink from '../AnimateLink';

import styles from './List.style';

class List extends Component {

  renderItems() {
    const stylesGrid = this.props.type === 'collection' ? styles.collection : styles.list;

    return this.props.items.map(item => (
      <li style={ stylesGrid.item } key={ item.id }>
        { this.props.children
          ? <AnimateLink to={ `/list/${this.props.params.slug}/${item.id}` }>
            <img src={ item.image } style={ stylesGrid.item.image } alt="" />
            <div style={ stylesGrid.item.content }>
              <h1>{ item.name }</h1>
              <p>Nombre de page : { item.pageNumber }</p>
              <p>Type : { item.type }</p>
            </div>
          </AnimateLink>
          : <Link to={ `/list/${this.props.params.slug}/${item.id}` } style={ stylesGrid.item.link }>
            <img src={ item.image } style={ stylesGrid.item.image } alt="" />
            <div style={ stylesGrid.item.content }>
              <h1>{ item.name }</h1>
              <p>Nombre de page : { item.pageNumber }</p>
              <p>Type : { item.type }</p>
            </div>
          </Link>
        }
      </li>
    ));
  }

  render() {
    return (
      <div>
        <section>
          <ul style={ styles.list }>
            { this.renderItems() }
          </ul>
        </section>
        { this.props.children
          ? this.props.children
          : null
        }
      </div>
    );
  }

  componentWillMount() {
    this.props.getBooks(this.props.routeParams.slug);
  }

  componentDidUpdate (nextProps, nextState) {
    if(this.props.routeParams.slug !== nextProps.routeParams.slug) {
      this.props.getBooks(this.props.routeParams.slug);
    }
  }

}

List.propTypes = {
  items: T.arrayOf(Types.Item),
  type: T.string,
  getBooks: T.func.isRequired,
};

List.defaultProps = {
  items: []
};

function mapStateToProps(appState) {
  return {
    items: appState.items,
    type: appState.list.type,
  };
}

export default connect(mapStateToProps, { getBooks })(List);
