import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import {List, ListItem} from 'material-ui/List';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import DeleteIcon from 'material-ui/svg-icons/action/delete';

class Setting extends Component {
  state = {
    value: 1,
  };

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <Tabs>
        <Tab label="General">
          <div style={{padding: 20}}>
            <TextField hintText="http://localhost/flux" disabled={true} fullWidth={true} />
            <SelectField
              floatingLabelText="Thème"
              value={this.state.value}
              onChange={this.handleChange}
            >
              <MenuItem value={1} primaryText="Blue" />
              <MenuItem value={2} primaryText="Light" />
              <MenuItem value={3} primaryText="Dark" />
            </SelectField>
            <br />
            <br /><Divider /><br />
            gh234HGf&234HGFhgfH45FHG4sfsdf98834gghjjkl<RaisedButton label="API Key" primary={true} />
          </div>
        </Tab>
        <Tab label="Libraries">
          <List>
            <ListItem primaryText="Bande dessinée" rightIcon={<DeleteIcon />} />
            <ListItem primaryText="Manga" rightIcon={<DeleteIcon />} />
            <ListItem primaryText="Comics" rightIcon={<DeleteIcon />} />
            <ListItem primaryText="Romans" rightIcon={<DeleteIcon />} />
          </List>
          <RaisedButton secondary={true} label="Add" fullWidth={true} />
        </Tab>
      </Tabs>
    );
  }
}

// Setting.propTypes = {
//   open: T.bool,
//   asideToggle: T.func.isRequired,
// };

export default Setting;
