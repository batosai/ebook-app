import React, { Component } from 'react';
import Progress from './Progress';

import styles from './Task.style';

const tasks = [
  {
    id: 1,
    text: "Téléchargement \"spiderman.cbz\"",
    value: "44%",
  },
  {
    id: 2,
    text: "Convertion \"ironman\" en epub",
    value: "24%",
  },
];

class Task extends Component {

  renderItems() {
    return tasks.map(item => (
      <li style={ styles.item } key={ item.id }>
        <Progress value={ item.value } />
        <p style={ styles.item.text }>{ item.text }</p>
      </li>
    ));
  }

  render() {
    return (
      <ul style={ styles.content }>
        { this.renderItems() }
      </ul>
    );
  }
}

export default Task;
