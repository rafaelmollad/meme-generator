import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      randomImage: "https://i.imgflip.com/1ur9b0.jpg",
      memes: []
    };
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(response => {
        const { memes } = response.data;
        this.setState({
          memes: memes
        });
      })
      .catch(error => console.log(error));
  }

  handleClick = () => {
    const randomNumber = Math.floor(Math.random() * this.state.memes.length);
    const randomImage = this.state.memes[randomNumber].url;
    this.setState({
      randomImage: randomImage
    });
  };

  render() {
    return (
      <div className="App">
        <img src={this.state.randomImage} />
        <button onClick={this.handleClick}>Generate</button>
      </div>
    );
  }
}

export default App;
