import React, { Component } from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';

import TabLibraries from '../components/Setting/TabLibraries';
import TabCollections from '../components/Setting/TabCollections';
import TabGeneral from '../components/Setting/TabGeneral';

class Setting extends Component {

  render() {
    return (
      <Tabs>
        <Tab label="General">
          <TabGeneral />
        </Tab>
        <Tab label="Libraries">
          <TabLibraries />
        </Tab>
        <Tab label="Collections">
          <TabCollections />
        </Tab>
      </Tabs>
    );
  }

}

export default Setting;
