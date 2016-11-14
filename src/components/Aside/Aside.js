import React, { Component } from 'react';
import Button from './Button';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { addTask } from '../../actions/task';
import './Aside.css';

import styles from './Aside.style';

class Aside extends Component {

  renderLinks() {
    return this.props.links.map(link => (
      <li style={ styles.list.item } key={ link.id }>
        <Link to={ link.href } style={ styles.list.item.link } activeStyle={ styles.list.item.link.hover }>{ link.name }</Link>
      </li>
    ))
  }

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
      <nav style={ styles.content }>
        <ul style={ styles.list }>
          { this.renderLinks() }
          <li><a onClick={ () => this.add() }>increment</a></li>
        </ul>
        <footer style={ styles.footer }>
          <ul style={ styles.list }>
            <li style={ {...styles.footer.item, ...styles.footer.item.first} }>
              <Button to={ '/task' } style={ styles.footer.item.btn } className="fontawesome-tasks">{ this.renderPastille() }</Button>
            </li>
            <li style={ styles.footer.item }>
              <Button to={ '/setting' } style={ styles.footer.item.btn } className="fontawesome-cog" />
            </li>
          </ul>
        </footer>
      </nav>
    );
  }
}

Aside.propTypes = {
  links : React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  pastille: React.PropTypes.number,
  addTask: React.PropTypes.func.isRequired,
};

function mapStateToProps(appState) {
  return {
    pastille: appState.task.count,
  };
}

export default connect(mapStateToProps, { addTask })(Aside);
