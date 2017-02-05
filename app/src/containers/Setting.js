import React, { Component, PropTypes as T } from 'react';
import { connect } from 'react-redux';
import { getLibraries } from '../actions/libraries';
// import * as Types from '../config/types';
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

  // componentWillMount() {
  //   this.props.getLibraries();
  // }

  componentDidUpdate (nextProps, nextState) {
    if(nextProps.libraries !== this.props.libraries) {
      this.props.getLibraries();
    }
  }

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
            {this.props.libraries.map(library => (
                <ListItem key={library.id} primaryText={library.name} rightIcon={<DeleteIcon />} />
            ))}
          </List>
          <RaisedButton secondary={true} label="Add" fullWidth={true} />
        </Tab>
      </Tabs>
    );
  }
}

Setting.propTypes = {
  // libraries: T.arrayOf(Types.library),
  libraries: T.array,
  getLibraries: T.func.isRequired,
};

Setting.defaultProps = {
  libraries: []
};

// export default Setting;

function mapStateToProps(appState) {
  return {
    libraries: appState.libraries
  };
}

export default connect(mapStateToProps, { getLibraries })(Setting);
