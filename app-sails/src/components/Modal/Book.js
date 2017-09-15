import React, { Component, PropTypes as T } from 'react';
import Dropzone from 'react-dropzone';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import Toggle from 'material-ui/Toggle';
import MenuItem from 'material-ui/MenuItem';
import { Tabs, Tab } from 'material-ui/Tabs';

import modalActions from './modalActions';

const style = {
  dialog: {
    width: '100%',
    height: '100%',
    padding: 0,
  },
  title: {
    width: '48%',
  },
  read: {
    container: {
      marginLeft: '4%',
      paddingTop: '60px',
      width: '48%',
      height: '12px',
      display: 'inline-block',
    },
    toggle: {
      width: '30%',
      float: 'right',
    },
  },
  author: { width: '48%' },
  editor: { marginLeft: '4%', width: '48%' },
  nbPage: { width: '30%' },
  nbVol: { marginLeft: '5%', width: '30%' },
  year: { marginLeft: '5%', width: '30%' },
};

class ModalBook extends Component {
  state = {
    value: 1,
    book: {
      title: null,
      read: false,
      author: null,
      editor: null,
      numberPages: null,
      numberVolumes: null,
      year: null,
      collection: null,
      description: null,
    },
    tabIndex: 0,
    dropzone: {
      marginTop: '24px',
      padding: '15px 0',
      width: 'calc(100% - 8px)',
      height: 'calc(100% - 8px)',
      border: '4px dashed #ccc',
      textAlign: 'center',
    },
    file: null,
  };

  componentWillMount = () => {
    const book = this.props.findBook({ id: Number(this.props.id) });
    if (book) {
      this.setState({
        book,
        file: `http://localhost:1337/books/${book.id}/illustration`,
      });
    }
  };

  handleChange = (event, index, value) => {
    let book = this.state.book;
    book[`${event.target.name}`] = value
      ? Number(value)
      : event.target.value;

    this.setState({
      book,
    });
  };

  handleToggle = (event, isInputChecked) => {
    let book = this.state.book;
    book.read = isInputChecked;

    this.setState({
      book,
    });
  };

  handleChangeSelectField = (event, index, value) => {
    let book = this.state.book;
    book.collection = parseInt(value, 10);

    this.setState({
      book,
    });
  };

  handleSave = () => {
    this.props.bookUpdate(this.state.book);
    this.props.onRequestClose();
  };

  // TAB

  handleTabChange = value => {
    this.setState({ tabIndex: value });
  };

  renderTab = () => (
    <Tabs onChange={this.handleTabChange} value={this.state.tabIndex}>
      <Tab label="Infos" value={0} />
      <Tab label="Picture" value={1} />
    </Tabs>
  );

  // Dropzone

  onDrop = (acceptedFiles, rejectedFiles) => {
    console.log('Accepted files: ', acceptedFiles);
    console.log('Rejected files: ', rejectedFiles);

    const file = acceptedFiles[0]

    const reader = new FileReader()
    reader.onload = event => {
      this.props.bookUpdateIllustration({
        id: this.state.book.id,
        image: event.target.result,
        fileName: file.name,
      });
    };
    reader.readAsDataURL(file)

    this.setState({
      file: file.preview,
    });
    this.onDragLeave();
  };

  onDragEnter = () => {
    const dropzone = this.state.dropzone;
    dropzone.border = '4px dashed red';
    this.setState({ dropzone });
  };

  onDragLeave = () => {
    const dropzone = this.state.dropzone;
    dropzone.border = '4px dashed #ccc';
    this.setState({ dropzone });
  };

  render = () => {
    const actions = modalActions(this.props.onRequestClose, this.handleSave);

    return (
      <Dialog
        title={this.renderTab()}
        titleStyle={{ padding: 0 }}
        actions={actions}
        modal={false}
        open={this.props.open}
        onRequestClose={this.props.onRequestClose}
        autoScrollBodyContent={true}
        contentStyle={style.dialog}
      >
        <div
          style={
            this.state.tabIndex ? { display: 'none' } : { display: 'block' }
          }
        >
          <TextField
            floatingLabelText="Title"
            name="title"
            onChange={this.handleChange}
            value={this.state.book.title}
            style={style.title}
          />
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
            style={style.author}
          />
          <TextField
            floatingLabelText="Editor"
            name="editor"
            onChange={this.handleChange}
            value={this.state.book.editor}
            style={style.editor}
          />
          <br />
          <TextField
            floatingLabelText="Nb pages"
            name="number_pages"
            onChange={this.handleChange}
            value={this.state.book.numberPages}
            type="number"
            style={style.nbPage}
          />
          <TextField
            floatingLabelText="Nb vol."
            name="number_volumes"
            onChange={this.handleChange}
            value={this.state.book.numberVolumes}
            type="number"
            style={style.nbVol}
          />
          <TextField
            floatingLabelText="Year"
            name="year"
            onChange={this.handleChange}
            value={this.state.book.year}
            type="number"
            style={style.year}
          />
          <br />

          <SelectField
            floatingLabelText="Collection"
            onChange={this.handleChangeSelectField}
            fullWidth={true}
            value={
              this.state.book.collection.id ? (
                this.state.book.collection.id
              ) : (
                this.state.book.collection
              )
            }
          >
            {this.props.collections.map(collection => (
              <MenuItem
                key={collection.id}
                primaryText={collection.title}
                value={collection.id}
              />
            ))}
          </SelectField>
          <TextField
            floatingLabelText="Description"
            name="description"
            onChange={this.handleChange}
            value={this.state.book.description}
            fullWidth={true}
            multiLine={true}
          />
        </div>
        <div
          style={
            this.state.tabIndex ? { display: 'block' } : { display: 'none' }
          }
        >
          <Dropzone
            onDrop={this.onDrop}
            multiple={false}
            accept={'image/jpeg, image/png'}
            onDragEnter={this.onDragEnter}
            onDragLeave={this.onDragLeave}
            style={this.state.dropzone}
          >
            <img src={this.state.file} height={280} alt="" />
          </Dropzone>
        </div>
      </Dialog>
    );
  };
}

ModalBook.propTypes = {
  id: T.number.isRequired,
  open: T.bool.isRequired,
  collections: T.array,
  findBook: T.func.isRequired,
};

export default ModalBook;
