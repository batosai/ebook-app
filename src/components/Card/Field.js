import React, { Component, PropTypes as T } from 'react';
import { findDOMNode } from 'react-dom';

class Field extends Component {

  constructor (props) {
    super(props)

    this.state = {
      editing: false
    };
  }

  render () {
    return this.state.editing ?
        this.props.type === "textarea" ?
          this.renderTextarea() : this.renderInput()
      : this.renderSpan();
  }

  renderSpan () {
    return (
      <span
        style={ this.props.style }
        onClick={ () => this.setState({ editing: true }) }>
        { this.props.defaultValue }
      </span>
    );
  }

  renderInput () {
    return (
      <input
        style={ this.props.style }
        onKeyPress={ e => this.onKeyPress(e) }
        defaultValue={ this.props.defaultValue } />
    );
  }

  renderTextarea () {
    return (
      <textarea
        style={ this.props.style }
        onKeyPress={ e => this.onKeyPress(e) }
        defaultValue={ this.props.defaultValue } />
    );
  }

  onKeyPress (e) {
    if (e.charCode === 13) {
      // Grab value from uncontrolled input
      const input = findDOMNode(this);
      this.props.onChange(input.value);
      // Switch to readonly mode
      this.setState({ editing: false });
    }
  }

  componentDidUpdate (props, state) {
    if (!state.editing && this.state.editing) {
      // Switched from span to input
      const input = findDOMNode(this);
      input.select();
    }
  }

}

Field.propTypes = {
  defaultValue: T.string,
  type: T.string,
  style: T.object,
  onChange: T.func.isRequired,
};

Field.defaultProps = {
  defaultValue: '',
  style: {},
  type: 'text',
};

export default Field;
