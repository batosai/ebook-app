import React, { Component } from 'react';

import TopBar from './containers/TopBar/Bar';
import Aside from './containers/Aside';

const style = {
  paddingTop: 64,
  height: "calc(100% - 64px)"
};

class App extends Component {
  render() {
    return (
      <div>
        <TopBar />

        <div style={style}>
          { this.props.children }
        </div>

        <Aside />
      </div>
    );
  }
}

export default App;
