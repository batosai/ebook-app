import React, { Component } from 'react';
import { Link } from 'react-router'

class Button extends Component {

  // TODO : Add pastille push.
  // Gestion des style en javascript entraine la gestion de l'etat et donc il est préférable de faire de plus petit composant.

  constructor(props) {
    super(props)

    this.state = {
      hover: false
    };
  }

  onMouseEnterHandler() {
    this.setState({
        hover: true
    });
  }
  onMouseLeaveHandler() {
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
      <Link to={ this.props.to } style={ {...this.props.style, ...btnHover} } activeStyle={ this.props.style.hover } onMouseEnter={ e => this.onMouseEnterHandler(e) } onMouseLeave={ e => this.onMouseLeaveHandler(e) } ><span className={ this.props.className }></span>
      { this.props.children
        ? this.props.children
        : null
      }</Link>
    );
  }
}

Button.propTypes = {
  style : React.PropTypes.object.isRequired,
  className : React.PropTypes.string.isRequired,
  to : React.PropTypes.string.isRequired,
};

export default Button;
