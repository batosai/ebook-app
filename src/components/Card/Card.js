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

  constructor (props) {
    super(props);

    this.state = {
      book: {
        name: 'Test'
      }
    };
  }

  onRest() {
    if(this.props.redirection) {
      browserHistory.push(this.props.redirection.url);
      this.props.clearUrl();
      this.props.asideToggle();
    }
  }

  // TODO Je ne peux pas mettre à jour l'api, il me faut un service.
  // 2) Il manque les champs edition pour le champs lu
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


  // 1a) Revoir l'update wording fonctionnement etc
  // 1b) Test https://github.com/davidkpiano/react-redux-form

  onChange(e) {
    this.setState({book: {
      name: e.target.value
    }});
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
            <h1><input type="text" style={ { ...styles.longText, ...styles.title } } onChange={ (e) => this.onChange(e) } value={ this.state.book.name } /></h1>
            <p>Nombre de page : <input type="text" style={ styles.text } onChange={ e => e.preventDefault } value={ this.props.book.pageNumber } /></p>
            <p>Type : { this.props.book.type }</p>
            <p>Lu : { this.props.book.read ?  'oui' : 'non' }</p>
            <p>Série : <input type="text" style={ styles.longText } onChange={ e => e.preventDefault } value={ this.props.book.collection } /></p>
            <p>Tag : <input type="text" style={ styles.longText } onChange={ e => e.preventDefault } value="" /></p>
            <p>Description : <textarea style={ styles.description } onChange={ e => e.preventDefault }></textarea></p>
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
  };
}

export default connect(mapStateToProps, { getBook, asideToggle, clearUrl })(Card);
