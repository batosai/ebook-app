import React, { Component } from 'react';

import { primary1Color, notificationColor, accent1Color } from '../../color';

const styles = {
  content: {
    width: "calc(100%-30px)",
    height: "18px",
    margin: "15px",
    backgroundColor: primary1Color,
    borderRadius: "30px"
  },
  line: {
    width: "0%",
    height: "100%",
    backgroundColor: notificationColor,
    borderRadius: "30px",
    textAlign: "center",
    fontSize: "12px",
    lineHeight: "15px",
    color: accent1Color,
  }
};

class Progress extends Component {
  render() {
    styles.line.width = this.props.value;

    return (
      <div style={ styles.content }>
          <div style={ styles.line }> { this.props.value } </div>
      </div>
    );
  }
}

export default Progress;
