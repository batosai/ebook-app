import React, { Component, PropTypes as T } from 'react';
import { connect } from 'react-redux';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import Toggle from 'material-ui/Toggle';
import MenuItem from 'material-ui/MenuItem';

import { findBookById, editBook } from '../../actions/book';

import modalActions from './modalActions';

const style = {
  dialog: {
    width: "100%",
    height: "100%",
    padding: 0
  },
  title: {
    width: "48%"
  },
  read: {
    container: {
      marginLeft: "4%",
      paddingTop: "60px",
      width: "48%",
      height: "12px",
      display: "inline-block"
    },
    toggle: {
      width: "30%",
      float: "right"
    }
  },
  author: {width: "48%"},
  editor: {marginLeft: "4%", width: "48%"},
  nbPage: {width: "30%"},
  nbVol: {marginLeft: "5%", width: "30%"},
  year: {marginLeft: "5%", width: "30%"}
};

class ModalBook extends Component {
  state = {
    value: 1,
    book: {
      title:'',
      read:false,
      author:'',
      editor:'',
      number_pages:'',
      number_volumes:'',
      year:'',
      collection_id:null,
      description:'',
    }
  };

  componentWillMount() {
    this.props.findBookById(parseInt(this.props.id, 10));
  }
  componentDidUpdate (prevProps, prevState) {
    if(prevProps.book !== this.props.book) {
      this.setState({
        book:this.props.book
      });
    }
  }

  handleChange = (event, index, value) => {
    let book = this.state.book;
    book[`${event.target.name}`] = value ? parseInt(value, 10) : event.target.value;

    this.setState({
      book
    });
  };

  handleToggle = (event, isInputChecked) => {
    let book = this.state.book;
    book.read = isInputChecked;

    this.setState({
      book
    });
  };

  handleChangeSelectField = (event, index, value) => {
    let book = this.state.book;
    book.collection_id = parseInt(value, 10);

    this.setState({
      book
    });
  };

  handleSave = () => {
    this.props.editBook(this.state.book);
    this.props.onRequestClose();
  };

  render() {
    const actions = modalActions(this.props.onRequestClose, this.handleSave);

    return (
      <Dialog
          title={`Edit`}
          actions={actions}
          modal={false}
          open={this.props.open}
          onRequestClose={this.props.onRequestClose}
          autoScrollBodyContent={true}
          contentStyle={style.dialog}
        >
          <TextField
            floatingLabelText="Title"
            name="title"
            onChange={this.handleChange}
            value={this.state.book.title}
            style={style.title} />
          <div style={style.read.container}>
            <Toggle
              label="Read"
              onToggle={this.handleToggle}
              defaultToggled={this.state.book.read}
              style={style.read.toggle}
            />
            </div>
          <br />
          <TextField
            floatingLabelText="Author"
            name="author"
            onChange={this.handleChange}
            value={this.state.book.author}
            style={style.author} />
          <TextField
            floatingLabelText="Editor"
            name="editor"
            onChange={this.handleChange}
            value={this.state.book.editor}
            style={style.editor} />
          <br />
          <TextField
            floatingLabelText="Nb pages"
            name="number_pages"
            onChange={this.handleChange}
            value={this.state.book.number_pages}
            type="number"
            style={style.nbPage} />
          <TextField
            floatingLabelText="Nb vol."
            name="number_volumes"
            onChange={this.handleChange}
            value={this.state.book.number_volumes}
            type="number"
            style={style.nbVol} />
          <TextField
            floatingLabelText="Year"
            name="year"
            onChange={this.handleChange}
            value={this.state.book.year}
            type="number" style={style.year} /><br />

          <SelectField
            floatingLabelText="Collection"
            onChange={this.handleChangeSelectField}
            fullWidth={true}
            value={this.state.book.collection_id}

          >
            {this.props.collections.map(collection => (
                <MenuItem key={collection.id} primaryText={collection.title} value={collection.id} />
            ))}
          </SelectField>
          <TextField
            floatingLabelText="Description"
            name="description"
            onChange={this.handleChange}
            value={this.state.book.description}
            fullWidth={true}
            multiLine={true} />
      </Dialog>
    );
  }
}

ModalBook.propTypes = {
  id: T.number.isRequired,
  open: T.bool.isRequired,
  book: T.object.isRequired,
  collections: T.array,
  findBookById: T.func.isRequired,
};

function mapStateToProps(appState) {
  return {
    collections: appState.collections.items,
    book: appState.book,
  };
}

export default connect(mapStateToProps, {findBookById, editBook})(ModalBook);
