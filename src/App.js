import React, {  Component } from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Circle from './components/Circle';
import GameOver from './components/GameOver';
import { circles } from './components/circles';

const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

class App extends Component {
  state = {
    score: 0,
    current: 0,
    gameOver: false,
  };

  timer = undefined;
  pace = 1500;

  clickHandler = () => {
    this.setState({
      score: this.state.score + 10,
    });
  };

  nextCircle = () => {
    let nextActive;

    do {
      nextActive = getRndInteger(1, 4)
    } while (nextActive === this.state.current);

    this.setState({
      current: nextActive,
    });

    this.pace *= 0.95;
    this.timer = setTimeout(this.nextCircle, this.pace);

    console.log("active circle is", this.state.current);
  };

  startHandler = () => {
    this.nextCircle();
  };

  stopHandler = () => {
    clearTimeout(this.timer);

  this.setState({
    gameOver: true,
  });
};

  render() {
    return (
      <div>
        {this.state.gameOver && <GameOver score={this.state.score} />}
        <Header />
        <p>Your score: {this.state.score}</p>
        <div className="circles">
     {circles.map((circle) => (
      <Circle 
      key={circle.id} 
      color={circle.color} 
      id={circle.id} 
      click={this.clickHandler}
      active={this.state.current === circle.id}
      />
      ))}
        </div>
      <div>
        <button onClick={this.startHandler}>Start</button>
        <button onClick={this.stopHandler}>Stop</button>
      </div>
      <div>
        <Footer />
      </div>
      </div>
    );
  }
}

export default App;