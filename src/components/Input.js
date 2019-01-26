import React from 'react';

const input = props => {
  return (
    <React.Fragment>
      <form onSubmit={props.call}>
      <input
        type="text"
        name="i"
        placeholder="Search"
      />
      <button>Submit</button>
      </form>
    </React.Fragment>
  );
};

export default input;
