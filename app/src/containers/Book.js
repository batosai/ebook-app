import React, { Component, PropTypes as T } from 'react';
import { connect } from 'react-redux';
import Chip from 'material-ui/Chip';
import Dialog from 'material-ui/Dialog';
import Subheader from 'material-ui/Subheader';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import img1 from '../files/awaken-5-ki-oon.jpg';

import { findBookById } from '../actions/books';

const tile = {
  id: 1,
  img: img1,
  title: 'Breakfast',
  author: 'jill111',
  local: true,
};

const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};

function handleRequestDelete() {
  alert('You clicked the delete button.');
}

function handleTouchTap() {
  alert('You clicked the Chip.');
}

class Book extends Component {
  state = {
    open: false,
    value: 1,
  };

  componentWillMount() {
    this.props.findBookById(parseInt(this.props.params.id, 10));
  }

  componentDidUpdate (prevProps, prevState) {
      if(prevProps.params.id !== this.props.params.id)
        this.props.findBookById(parseInt(this.props.params.id, 10));
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  handleChange = (event, index, value) => this.setState({value});

  render() {
    const actions = [
        <FlatButton
          label="Cancel"
          primary={true}
          onTouchTap={this.handleClose}
        />,
        <FlatButton
          label="Submit"
          primary={true}
          keyboardFocused={true}
          onTouchTap={this.handleClose}
        />,
      ];

    return (
      <div>
        <Subheader>Subheader</Subheader>
        <img src={this.props.book.img ? this.props.book.img : tile.img} alt="" />
        <h1>{this.props.book.title ? this.props.book.title : tile.title}</h1>
        <div style={styles.wrapper}>
          {this.props.book.formats.map(format => (
            <Chip key={format} style={styles.chip}>{format}</Chip>
          ))}
          <Chip
            onRequestDelete={handleRequestDelete}
            onTouchTap={handleTouchTap}
            style={styles.chip} >EPUB</Chip>
        </div>
        <p>{this.props.book.number_pages} pages</p>
        <p>{this.props.book.editor}</p>
        <p>{this.props.book.read ? 'Lu' : 'Non lu'}</p>
        <p>{this.props.book.description}</p>
        <RaisedButton label="Modify" secondary={true} style={{margin: 12}} onTouchTap={this.handleOpen} />

        // TODO
        // title, author, format, nb pages, editor, lu/non lu, description, nombre de volumes, Année, Mot clés
        // collection
        // onglet 2 : couverture
        <Dialog
            title={`Edit ${tile.title}`}
            actions={actions}
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose}
            autoScrollBodyContent={true}
          >
            <SelectField
              floatingLabelText="Frequency"
              value={this.state.value}
              onChange={this.handleChange}
            >
              <MenuItem value={1} primaryText="Never" />
              <MenuItem value={2} primaryText="Every Night" />
              <MenuItem value={3} primaryText="Weeknights" />
              <MenuItem value={4} primaryText="Weekends" />
              <MenuItem value={5} primaryText="Weekly" />
            </SelectField><br />
            <TextField
              hintText="Hint Text"
            /><br />
            <br />
            <TextField fullWidth={true}
              hintText="The hint text can be as long as you want, it will wrap."
            /><br />

          </Dialog>
      </div>
    );
  }
}

Book.propTypes = {
  book: T.object.isRequired,
  findBookById: T.func.isRequired,
};

function mapStateToProps(appState) {
  return {
    book: appState.books.length ? appState.books[0] : {formats:[]},
    ...appState
  };
}

export default connect(mapStateToProps, {findBookById})(Book);
