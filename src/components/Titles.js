import React from 'react';

const hStyle={
  fontSize:'50px',
  marginTop:'30px',
  padding:'10px',
  color:'white',
  textAlign: 'center'

}

const titles = props => {
  return (
    <React.Fragment>
      <h1 style={hStyle} >Get Cool Images, Just Give a Shot !!!</h1>
    </React.Fragment>
  );
};

export default titles;
