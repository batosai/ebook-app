import React, { Component } from 'react';
import { default as T } from 'prop-types';
import Dropzone from 'react-dropzone';
import Tiles from './Tiles';

const style = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: '100%',
    height: '100%',
    padding: '5px',
    overflowY: 'auto',
  },
};

class Collection extends Component {
  state = {
    dropzone: {
      width: 'calc(100% - 8px)',
      height: 'calc(100% - 8px)',
      border: '4px dashed white',
    },
  };

  componentWillMount = () => {
    if (this.props.params.id) {
      this.props.findBooksByCollectionId(parseInt(this.props.params.id, 10));
    }
    else {
      this.props.findAll();
    }
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.params.id !== this.props.params.id) {
      if (this.props.params.id) {
        this.props.findBooksByCollectionId(parseInt(this.props.params.id, 10));
      }
      else {
        this.props.findAll();
      }
    }
  };

  onDrop = (acceptedFiles, rejectedFiles) => {
    console.log('Accepted files: ', acceptedFiles);
    console.log('Rejected files: ', rejectedFiles);

    const file = acceptedFiles[0]

    const reader = new FileReader()
    reader.onload = event => {
      this.props.bookUpload({
        collectionId: parseInt(this.props.params.id, 10),
        file: event.target.result,
        fileName: file.name,
      });
    };
    reader.readAsDataURL(file)

    this.onDragLeave();
  };

  onDragEnter = () => {
    const dropzone = this.state.dropzone;
    dropzone.border = '4px dashed red';
    this.setState({ dropzone });
  };

  onDragLeave = () => {
    const dropzone = this.state.dropzone;
    dropzone.border = '4px dashed white';
    this.setState({ dropzone });
  };
// accept={'application/pdf'}
  render() {
    return (
      <Dropzone
        onDrop={this.onDrop}
        multiple={false}
        disableClick
        onDragEnter={this.onDragEnter}
        onDragLeave={this.onDragLeave}
        style={this.state.dropzone}
      >
        <Tiles style={style} tiles={this.props.books} />
      </Dropzone>
    );
  }
}

Collection.propTypes = {
  books: T.array.isRequired,
  findBooksByCollectionId: T.func.isRequired,
};

export default Collection;
