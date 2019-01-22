import React from "react";

function Meme(props) {
  return (
    <div id="meme">
      <h1 id="top-text">{props.state.topText}</h1>
      <img src={props.state.randomImage} />
      <h1 id="bottom-text">{props.state.bottomText}</h1>
    </div>
  );
}

export default Meme;
