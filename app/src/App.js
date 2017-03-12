import React, { Component } from 'react';

import TopBar from './containers/TopBar/Bar';
import Aside from './containers/Aside';

class App extends Component {
  render() {
    return (
      <div>
        <TopBar />

        <div style={{paddingTop: 64, height: "100%"}}>
          { this.props.children }
        </div>

        <Aside />
      </div>
    );
  }
}

export default App;
