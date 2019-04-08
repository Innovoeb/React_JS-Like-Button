import React, { Component } from 'react';

import './like.css';

class App extends Component {

  state = {
    likes: 0,
    grammer: "likes"
  }

  addLike = () => {
    this.setState({
      likes: this.state.likes + 1,
    })
    if (this.state.likes === 0) {
      this.setState({
        grammer: this.state.grammer = "like"
      })
    } else {
      this.setState({
        grammer: this.state.grammer = "likes"
      })
    }

    console.log(this.state.likes)
  };
  render() {
    return (
      <div id="like-button">
        <button onClick={this.addLike}>{this.state.likes} {this.state.grammer}</button>
      </div>
    );
  }
}

export default App;
