import React from "react";

import "./Meme.css";

function Form(props) {
  return (
    <div>
      <form>
        <input
          type="text"
          name="topText"
          value={props.state.topText}
          id="top-text-input-field"
          placeholder="Top text"
          onChange={props.handleChange}
        />
        <br />
        <input
          type="text"
          name="bottomText"
          value={props.state.bottomText}
          id="bottom-text-input-field"
          placeholder="Bottom text"
          onChange={props.handleChange}
        />
      </form>
      <button onClick={props.handleClick}>Generate</button>
    </div>
  );
}

export default Form;
