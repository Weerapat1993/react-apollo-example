import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dogs from './Dogs';
import DogPhoto from './DogPhoto';

class App extends Component {
  state = {
    breed: 'affenpinscher',
  }

  handleBreed = (e) => {
    this.setState({ breed: e.target.value })
  }

  render() {
    const { breed } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Dogs onDogSelected={this.handleBreed} />
          <DogPhoto breed={breed} />
        </header>
      </div>
    );
  }
}

export default App;