import React, { Component, PropTypes as T } from 'react';
import Chip from 'material-ui/Chip';
import Subheader from 'material-ui/Subheader';
import RaisedButton from 'material-ui/RaisedButton';

import ModalBook from '../../containers/Modal/Book';

const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};

const handleRequestDelete = () => {
  alert('You clicked the delete button.');
};

const handleTouchTap = () => {
  alert('You clicked the Chip.');
};

class Book extends Component {
  state = {
    modal: {
      delete: { open: false },
      book: { open: false },
    },
  };

  modalToggle = type => {
    let modal = this.state.modal;
    modal[type].open = !modal[type].open;
    this.setState({
      modal,
    });
  };

  componentWillMount = () => {
    this.props.findBookById(parseInt(this.props.params.id, 10));
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.params.id !== this.props.params.id)
      this.props.findBookById(parseInt(this.props.params.id, 10));
  };

  handleEdit = () => {
    this.modalToggle('book');
  };

  renderFormats = () => {
    if (this.props.book.formats) {
      return (
        <div style={styles.wrapper}>
          {this.props.book.formats.map(format => (
            <Chip key={format} style={styles.chip}>
              {format}
            </Chip>
          ))}
          <Chip
            onRequestDelete={handleRequestDelete}
            onTouchTap={handleTouchTap}
            style={styles.chip}
          >
            EPUB
          </Chip>
        </div>
      );
    }
  };

  renderModalBook = () => (
    <ModalBook
      open={this.state.modal.book.open}
      onRequestClose={() => this.modalToggle('book')}
      id={parseInt(this.props.params.id, 10)}
    />
  );

  render = () => {
    return (
      <div>
        <Subheader>Subheader</Subheader>
        <img src={this.props.book.img} alt="" />
        <h1>{this.props.book.title}</h1>

        {this.renderFormats()}
        <p>{this.props.book.number_pages} pages</p>
        <p>{this.props.book.editor}</p>
        <p>{this.props.book.read ? 'Lu' : 'Non lu'}</p>
        <p>{this.props.book.description}</p>
        <RaisedButton
          label="Modify"
          secondary={true}
          style={{ margin: 12 }}
          onTouchTap={this.handleEdit}
        />

        {this.state.modal.book.open ? this.renderModalBook() : ''}
      </div>
    );
  };
}

Book.propTypes = {
  book: T.object.isRequired,
  findBookById: T.func.isRequired,
};

export default Book;
