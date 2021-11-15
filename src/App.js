import React, {  Component } from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Circle from './components/Circle';
import { circles } from './components/circles';

class App extends Component {
  state = {};

  render() {
    return (
      <div>
        <h1>Catch Donald!</h1>
        <p>Your score:</p>
        <div className="circles">
     {circles.map((circle) => (
      <Circle key={circle.id} color={circle.color} id={circle.id} />
      ))}
        </div>
      <div>
        <button>Start</button>
        <button>Stop</button>
      </div>
      </div>
    );
  }
}

export default App;