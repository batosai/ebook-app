import React, { Component } from 'react';
import Collection from '../components/collection/Tiles';

import img1 from '../files/awaken-5-ki-oon.jpg';
import img2 from '../files/gunnm-mars-chronicle-2-glenat.jpg';
import img3 from '../files/9tigres-01.jpg';
import img4 from '../files/grendizer-giga-1-black-box.jpg';
import img5 from '../files/last-hero-inuyashiki-7-ki-oon.jpg';
import img6 from '../files/overlord-1-taifu.jpg';
import img7 from '../files/1507-1.jpg';

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

const tilesData = [
  {
    id: 1,
    img: img1,
    title: 'Breakfast',
    author: 'jill111',
    local: true,
  },
  {
    id: 2,
    img: img2,
    title: 'Tasty burger',
    author: 'pashminu',
    local: false,
  },
  {
    id: 3,
    img: img7,
    title: 'Camera',
    author: 'Danson67',
    local: true,
  },
  {
    id: 4,
    img: img4,
    title: 'Morning',
    author: 'fancycrave1',
    local: true,
  },
  {
    id: 5,
    img: img5,
    title: 'Hats',
    author: 'Hans',
    local: true,
  },
  {
    id: 6,
    img: img6,
    title: 'Honey',
    author: 'fancycravel',
    local: true,
  },
  {
    id: 7,
    img: img3,
    title: 'Vegetables',
    author: 'jill111',
    local: true,
  },
  {
    id: 8,
    img: img4,
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
    local: true,
  },
];

class Home extends Component {

  render() {
    return (
      <Collection
        style={style}
        tiles={tilesData} />
    );
  }
}

export default Home;
