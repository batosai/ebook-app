import React, { Component } from 'react';
import { connect } from 'react-redux';
import Progress from './Progress';
import { removeTask } from '../../actions/task';

import styles from './Task.style';

class Task extends Component {

  onRemove(id) {
    this.props.removeTask(id);
  }

  renderItems() {
    return this.props.tasks.map(item => (
      <li style={ styles.item } key={ item.id }>
        <Progress value={ item.value } />
        <p style={ styles.item.remove }><a onClick={ () => this.onRemove(item.id) } style={ { color: styles.item.remove.color } }>annuler</a></p>
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

Task.propTypes = {
  tasks : React.PropTypes.array.isRequired,
  removeTask: React.PropTypes.func.isRequired,
};

function mapStateToProps(appState) {
  return {
    tasks: appState.task.tasks,
  };
}

export default connect(mapStateToProps, { removeTask })(Task);
