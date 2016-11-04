import React, { Component } from 'react';

class Button extends Component {

  // TODO : Add pastille push.
  // Gestion des style en javascript entraine la gestion de l'etat et donc il est préférable de faire de plus petit composant.

  constructor (props) {
    super(props)

    this.state = {
      hover: false
    };
  }

  onMouseEnterHandler () {
    this.setState({
        hover: true
    });
  }
  onMouseLeaveHandler () {
      this.setState({
          hover: false
      });
  }

  render() {
    let btnHover = null;
    if(this.state.hover) {
      btnHover = this.props.style.hover;
    }
    return (
      <button style={ {...this.props.style, ...btnHover} } className={ this.props.className } onMouseEnter={ e => this.onMouseEnterHandler(e) } onMouseLeave={ e => this.onMouseLeaveHandler(e) }></button>
    );
  }
}

export default Button;
