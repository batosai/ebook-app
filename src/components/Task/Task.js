import React, { Component } from 'react';

import styles from './Task.style';

class Task extends Component {

  render() {
    return (
      <div style={ styles.content }>
        Tasks
      </div>
    );
  }
}

// Card.propTypes = {
//   links : React.PropTypes.arrayOf(React.PropTypes.object).isRequired
// }

export default Task;
