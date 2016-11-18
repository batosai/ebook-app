import React, { Component } from 'react';

import styles from './Setting.style';

class Setting extends Component {

  render() {
    return (
      <div style={ styles.content }>
        <p style={ styles.text }>OPDS</p>
        <input type="text" style={ styles.url } onChange={ e => e.preventDefault } value="http://apple.com/fr" />
      </div>
    );
  }
}

// Card.propTypes = {
//   links : React.PropTypes.arrayOf(React.PropTypes.object).isRequired
// }

export default Setting;
