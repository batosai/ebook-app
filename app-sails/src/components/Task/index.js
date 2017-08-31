import React, { Component } from 'react';

import Progress from './Progress';

class Task extends Component {
  render = () => {
    return (
      <div>
        <Progress>Adferdgfgf.pdf</Progress>
        <Progress value={40}>cool.epub</Progress>
      </div>
    );
  };
}

// Task.propTypes = {
//   open: T.bool,
//   asideToggle: T.func.isRequired,
// };

export default Task;
