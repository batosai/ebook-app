import React, { Component, PropTypes as T } from 'react';
import { connect } from 'react-redux';
import Chip from 'material-ui/Chip';
import Dialog from 'material-ui/Dialog';
import Subheader from 'material-ui/Subheader';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import Toggle from 'material-ui/Toggle';
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

  renderFormats () {
    if(this.props.book.formats)
    {
      return (
        <div style={styles.wrapper}>
          {this.props.book.formats.map(format => (
            <Chip key={format} style={styles.chip}>{format}</Chip>
          ))}
          <Chip
            onRequestDelete={handleRequestDelete}
            onTouchTap={handleTouchTap}
            style={styles.chip} >EPUB</Chip>
        </div>
      );
    }
  }

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

        {this.renderFormats()}
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
            contentStyle={{width: "100%", height: "100%", padding: 0}}
          >
            <TextField
              floatingLabelText="Title" style={{width: "48%"}} />
            <div style={{marginLeft: "4%", paddingTop: "60px", width: "48%", height: "12px", display: "inline-block"}}>
              <Toggle
                label="Read"
                style={{width: "30%", float: "right"}}
              />
              </div>
            <br />
            <TextField
              floatingLabelText="Author" style={{width: "48%"}} />
            <TextField
              floatingLabelText="Editor" style={{marginLeft: "4%", width: "48%"}} />
            <br />
            <TextField
              floatingLabelText="Nb pages" type="number" style={{width: "30%"}} />
            <TextField
              floatingLabelText="Nb vol." type="number" style={{marginLeft: "5%", width: "30%"}} />
            <TextField
              floatingLabelText="Year" type="number" style={{marginLeft: "5%", width: "30%"}} /><br />

            <SelectField
              fullWidth={true}
              floatingLabelText="Collection"
              value={this.state.value}
              onChange={this.handleChange}
            >
              <MenuItem value={1} primaryText="Never" />
              <MenuItem value={2} primaryText="Every Night" />
              <MenuItem value={3} primaryText="Weeknights" />
              <MenuItem value={4} primaryText="Weekends" />
              <MenuItem value={5} primaryText="Weekly" />
            </SelectField>
            <TextField fullWidth={true}
              multiLine={true}
              floatingLabelText="Description"
            />

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
