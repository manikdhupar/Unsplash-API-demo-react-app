import React from 'react';

const input = props => {
  return (
    <React.Fragment>
      <input
        onChange={props.inputChangeHandler}
        type="text"
        placeholder="Search"
      />
    </React.Fragment>
  );
};

export default input;
