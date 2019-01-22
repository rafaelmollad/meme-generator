import React, { Component } from "react";

import "./App.css";
import Meme from "./components/Meme";
import Form from "./components/Form";

class App extends Component {
  constructor() {
    super();
    this.state = {
      randomImage: "https://i.imgflip.com/1ur9b0.jpg",
      memes: [],
      topText: "",
      bottomText: ""
    };
  }

  // Fetch data when component is mounted for the first time
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

  // Generate a new random image
  handleClick = () => {
    const randomNumber = Math.floor(Math.random() * this.state.memes.length);
    const randomImage = this.state.memes[randomNumber].url;
    this.setState({
      randomImage: randomImage
    });
  };

  // Change top and bottom text
  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className="App">
        <Meme state={this.state} />
        <Form
          state={this.state}
          handleChange={this.handleChange}
          handleClick={this.handleClick}
        />
      </div>
    );
  }
}

export default App;
