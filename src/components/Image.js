import React, { component } from 'react';
// import styles from './image.css';

const iStyle = {
  height: '300px',
  width: '25%',
  margin: '2.5%',
  display: 'inline-block',
  borderRadius:'15%'
};

const image = props => {
  return <img src={props.src} alt="Imaagee" style={iStyle} />;
};

export default image;
