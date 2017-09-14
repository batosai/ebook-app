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
    book: {},
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
    console.log(this.props.books);
    this.setState({
      book: this.props.books.find(b => b.id === Number(this.props.params.id))
    });
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.params.id !== this.props.params.id) {
      this.setState({
        book: this.props.books.find(b => b.id === Number(this.props.params.id))
      });
    }
  };

  handleEdit = () => {
    this.modalToggle('book');
  };

  renderFormats = () => {
    if (this.state.book.formats) {
      return (
        <div style={styles.wrapper}>
          {this.state.book.formats.map(format => (
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
      id={Number(this.props.params.id)}
    />
  );

  render = () => {
    return (
      <div>
        <Subheader>Subheader</Subheader>
        {/*<img src={this.state.book.img} alt="" />*/}
        <h1>{this.state.book.title}</h1>

        {this.renderFormats()}
        <p>{this.state.book.number_pages} pages</p>
        <p>{this.state.book.editor}</p>
        <p>{this.state.book.read ? 'Lu' : 'Non lu'}</p>
        <p>{this.state.book.description}</p>
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
  books: T.array.isRequired,
};

export default Book;
