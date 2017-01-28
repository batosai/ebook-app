import React, { Component } from 'react';
import Chip from 'material-ui/Chip';
import Dialog from 'material-ui/Dialog';
import Subheader from 'material-ui/Subheader';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import img1 from '../files/awaken-5-ki-oon.jpg';

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
        <img src={tile.img} alt="" />
        <h1>{tile.title}</h1>
        <div style={styles.wrapper}>
          <Chip style={styles.chip}>CBZ</Chip>
          <Chip style={styles.chip}>PDF</Chip>
          <Chip
            onRequestDelete={handleRequestDelete}
            onTouchTap={handleTouchTap}
            style={styles.chip} >EPUB</Chip>
        </div>
        <p>22 pages</p>
        <p>Glénat</p>
        <p>Lu</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <RaisedButton label="Modify" secondary={true} style={{margin: 12}} onTouchTap={this.handleOpen} />

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

// Book.propTypes = {
//   open: T.bool,
//   asideToggle: T.func.isRequired,
// };

export default Book;
