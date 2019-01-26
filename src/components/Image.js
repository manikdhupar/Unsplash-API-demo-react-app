import React, { component } from 'react';
// import styles from './image.css';

const iStyle = {
  height: '100px',
  width: '100px',
  display: 'block'
};

const image = props => {
  return <img src={props.src} alt="Imaagee" style={iStyle} />;
};

export default image;
