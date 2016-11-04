import React, { Component, PropTypes as T } from 'react';
import { connect } from 'react-redux';
import { asideToggle, setUrl } from '../actions/link';

class AnimateLink extends Component {

  onClick() {
    this.props.asideToggle();
    this.props.setUrl(this.props.to);
  }

  render() {
    return (
      <div onClick={ (e) => this.onClick(e) }>{ this.props.children
        ? this.props.children
        : null
      }
      </div>
    );
  }
}

AnimateLink.propTypes = {
  asideToggle: T.func.isRequired,
  setUrl: T.func.isRequired,
  open: T.bool
};

AnimateLink.defaultProps = {
  open: true
}

function mapStateToProps (appState) {
  return {
    open: appState.link.open,
  };
}

export default connect(mapStateToProps, { asideToggle, setUrl })(AnimateLink);
