import React, { Component, PropTypes as T } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router'
import { getBook } from '../../actions/items';
import { asideToggle, clearUrl } from '../../actions/link';
import { updateBook } from '../../actions/items';
import { toogleUpdate } from '../../actions/list';
import Field from './Field';
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

  // select : https://jedwatson.github.io/react-select/
  // tag : https://github.com/olahol/react-tagsinput
  // Il manque les champs editions pour le champs lu
  // drag and drop book (besoin api)
  // delete book. (besoin api)
  // card warning
  // Upload book
  // Upload cover
  // splash screen
  // search

  // Server express / socket.io
  // pas de db pour l'instant juste mettre les flux en dure.
  // mettre les appel dans le fichier api.
  // Ne pas mettre de liaison ailleur.
  // essayer d'optimiser d'avantage.


  onUpdate(text) {
    let item = this.props.book;
    item.name = text;

    this.props.updateBook(item, () => {
      this.props.toogleUpdate();
    });
  }

  onChange(text, model) {
    let item = this.props.book;
    item[model] = text;

    this.props.updateBook(item, () => {
      this.props.toogleUpdate();
    });
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
            <h1>
              <Field
                  style={ { ...styles.longText, ...styles.title } }
                  defaultValue={ this.props.book.name }
                  onChange={ text => this.onChange(text, 'name') } />
            </h1>

            <p>Nombre de page :
              <Field
                style={ styles.text }
                defaultValue={ this.props.book.pageNumber }
                onChange={ text => this.onChange(text, 'pageNumber') } />

            </p>

            <p>Type : { this.props.book.type }</p>

            <p>Lu : { this.props.book.read ?  'oui' : 'non' }</p>

            <p>Série : <select><option>{ this.props.book.collection }</option></select></p>

            <p>Tag :
              <Field
                  style={ styles.longText }
                  defaultValue={ this.props.book.tag }
                  onChange={ text => this.onChange(text, 'tag') } />
            </p>

            <p>Description : <textarea style={ styles.description } onChange={ e => this.onChange(e, 'description') } value={ this.props.book.description } /></p>
          </aside>
        }
      </Motion>
    );
  }

  componentWillMount() {
    this.props.getBook(this.props.params.id);
  }

  componentDidUpdate (nextProps, nextState) {
    this.props.getBook(this.props.params.id);
  }

}

Card.propTypes = {
  book: Types.Item,
  open: T.bool,
  redirection: T.object,
  getBook: T.func.isRequired,
  asideToggle: T.func.isRequired,
  clearUrl: T.func.isRequired
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
    book: appState.item,
    ...appState
  };
}

export default connect(mapStateToProps, { getBook, asideToggle, clearUrl, updateBook, toogleUpdate })(Card);
