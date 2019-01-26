import React from 'react';

const wrapper={
  textAlign:'center'
}

const fStyle={
  display:'inline-block'
}

const input = props => {
  return (
    <React.Fragment>
      <div style={wrapper} >
        <form style={fStyle} onSubmit={props.call}>
        <input
          type="text"
          name="i"
          placeholder="Search"
        />
        <button>Submit</button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default input;
