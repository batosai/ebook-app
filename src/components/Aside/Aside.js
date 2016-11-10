import React, { Component } from 'react';
import Button from './Button';
import { Link } from 'react-router';
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

  render() {
    return (
      <nav style={ styles.content }>
        <ul style={ styles.list }>
          { this.renderLinks() }
        </ul>
        <footer style={ styles.footer }>
          <ul style={ styles.list }>
            <li style={ {...styles.footer.item, ...styles.footer.item.first} }>
              <Button to={ '/task' } style={ styles.footer.item.btn } className="fontawesome-tasks"><span style={ styles.footer.item.btn.notification }>2</span></Button>
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
  links : React.PropTypes.arrayOf(React.PropTypes.object).isRequired
};

export default Aside;
