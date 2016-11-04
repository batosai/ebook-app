import React, { Component, PropTypes as T } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as Types from '../../types';
import { getBooks } from '../../actions/list';
import AnimateLink from '../AnimateLink';

import styles from './List.style';

class List extends Component {

  renderItems() {
    return this.props.items.map(item => (
      <li style={ styles.list.item } key={ item.id }>
        { this.props.children
          ? <AnimateLink to={ '/list/' + item.id }><img src={ item.image } alt="" width="190" height="280" /></AnimateLink>
          : <Link to={ '/list/' + item.id }><img src={ item.image } alt="" width="190" height="280" /></Link>
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
          Add Search, filter, collections ?
        </section>
        { this.props.children
          ? this.props.children
          : null
        }
      </div>
    );
  }

  componentWillMount () {
    this.props.getBooks();
  }
}

List.propTypes = {
  items: React.PropTypes.arrayOf(Types.Item),
  getBooks: T.func.isRequired,
};

List.defaultProps = {
  items: []
}

function mapStateToProps (appState) {
  return {
    items: appState.items
  };
}

export default connect(mapStateToProps, { getBooks })(List);
