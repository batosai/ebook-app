import React, { Component } from 'react';
import Button from './Button';
import { connect } from 'react-redux';
import { addTask } from '../../actions/task';

import styles from './Aside.style';

class Footer extends Component {

  add() {
    this.props.addTask({
      id: Math.round(new Date().getTime() / 1000),
      text: "Téléchargement \"spiderman.cbz\"",
      value: Math.floor((Math.random() * 100) + 1) + "%",
    });
  }

  renderPastille() {
    return this.props.pastille ? <span style={ styles.footer.item.btn.pastille }>{ this.props.pastille }</span> : null;
  }

  render() {
    return (
      <footer style={ styles.footer }>
        <a onClick={ () => this.add() }>increment</a>
        <ul style={ styles.list }>
          <li style={ {...styles.footer.item, ...styles.footer.item.first} }>
            <Button to={ '/task' } style={ styles.footer.item.btn } className="fontawesome-tasks">{ this.renderPastille() }</Button>
          </li>
          <li style={ styles.footer.item }>
            <Button to={ '/setting' } style={ styles.footer.item.btn } className="fontawesome-cog" />
          </li>
        </ul>
      </footer>
    );
  }
}

Footer.propTypes = {
  pastille: React.PropTypes.number,
  addTask: React.PropTypes.func.isRequired,
};

function mapStateToProps(appState) {
  return {
    pastille: appState.task.count,
    routing: appState.routing,
  };
}

export default connect(mapStateToProps, { addTask })(Footer);
