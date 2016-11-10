import React, { Component, PropTypes as T } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router'
import { getBook } from '../../actions/items';
import { asideToggle, clearUrl } from '../../actions/link';
import AnimateLink from '../AnimateLink';

import * as Types    from '../../types';
import styles from './Card.style';

import { Motion, spring } from 'react-motion';

class Card extends Component {

  onRest() {
    if(this.props.redirection) {
      browserHistory.push(this.props.redirection.url);
      this.props.clearUrl();
      this.props.asideToggle();
    }
  }

  render() {

    return (
      <Motion defaultStyle={ {x: 0} } onRest={ () => this.onRest() } style={ {x: spring(this.props.open ? -250 : 0, {precision:1, stiffness: 350})} }>
        {({x}) =>
          <aside style={{
                WebkitTransform: `translate3d(${x}px, 0, 0)`,
                transform: `translate3d(${x}px, 0, 0)`,
                ...styles.aside
              }}>

            <span style={ styles.close }><AnimateLink to={ `/list/${this.props.params.slug}` }>x</AnimateLink></span>
            <img src={ this.props.book.image } width="210" alt="" />
            <h1>{ this.props.book.name }</h1>
            <p>Nombre de page : { this.props.book.pageNumber }</p>
            <p>Type : { this.props.book.type }</p>
            <p>Lu : { this.props.book.read ?  'oui' : 'non' }</p>
            <p>Série : { this.props.book.collection }</p>
            <p>Tag : </p>
            <p>Description : </p>
          </aside>
        }
      </Motion>
    );
  }

  componentWillMount() {
      this.props.getBook(this.props.params.id);
  }

  componentWillUpdate() {
    this.props.getBook(this.props.params.id);
  }

}

Card.propTypes = {
  book: Types.Item,
  open: T.bool,
  redirection: T.string,
  getBook: T.func.isRequired,
  asideToggle: T.func.isRequired,
  clearUrl: T.func.clearUrl
};

Card.defaultProps = {
  book: {},
  open: true,
  redirection: null
};

function mapStateToProps(appState) {
  return {
    open: appState.link.open,
    redirection: appState.link.redirection,
    book: appState.item
  };
}

export default connect(mapStateToProps, { getBook, asideToggle, clearUrl })(Card);
