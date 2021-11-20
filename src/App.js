import React, {  Component } from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Circle from './components/Circle';
import GameOver from './components/GameOver';
import { circles } from './components/circles';

import startSound from './assets/sounds/fluffing-a-duck.mp3';
import endSound from './assets/sounds/gameover.mp3';
import clickSound from './assets/sounds/pop.mp3';

let gameEndSound = new Audio(endSound);
let gameStartSound = new Audio(startSound);
let gameClickSound = new Audio(clickSound);

const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

class App extends Component {
  state = {
    score: 0,
    current: 0,
    showGameOver: false,
    pace: 1500,
    rounds: 0,
    gameStart: false,
  };

  timer = undefined;

  // clickPlay = () => {
  //   if (clickSound)
  // }

  clickHandler = (id) => {
    gameClickSound.play();

    console.log("you clicked: ", id);

    if (this.state.current !== id) {
      this.stopHandler();
      return;
    }

    this.setState({
      score: this.state.score + 10,
      rounds: 0,
    });
  };

  nextCircle = () => {
    if(this.state.rounds >= 5) {
      this.stopHandler();
      return;
    }
    let nextActive;

    do {
      nextActive = getRndInteger(1, 4)
    } while (nextActive === this.state.current);

    this.setState({
      current: nextActive,
      pace: this.state.pace * 0.95,
      rounds: this.state.rounds +1,
    });

    this.timer = setTimeout(this.nextCircle, this.state.pace);

    console.log("active circle is", this.state.current);
    console.log("round number", this.state);
  };

  startHandler = () => {
    gameStartSound.play();
    gameStartSound.loop = true;
    this.nextCircle();
    this.setState({
      gameStart: true,
    });
  };

  stopHandler = () => {
    gameStartSound.pause();
    gameEndSound.play();
    clearTimeout(this.timer);

  this.setState({
    gameOver: true,
    current: 0,
    gameStart: false,
  });
};

closeHandler = () => {
  this.setState({
    gameOver: false,
    score: 0,
    pace: 1500,
    rounds: 0,
  });
};

// popupHandler = (e) => {
//   e.preventDefault();
//   this.setState({ showGameOver: true});
// };

  render() {
    return (
      <div>
        {this.state.gameOver && (
         <GameOver score={this.state.score} close={this.closeHandler} />
        )}
        <Header />
        <p>Your score: {this.state.score}</p>
        <div className="circles">
     {circles.map((circle) => (
      <Circle 
      key={circle.id} 
      color={circle.color} 
      id={circle.id} 
      click={() => this.clickHandler(circle.id)}
      active={this.state.current === circle.id}
      disabled={this.state.gameStart}
      />
      ))}
        </div>
      <div>
        <button disabled={this.state.gameStart} onClick={this.startHandler}>
          Start
          </button>
        <button disabled={this.state.gameStopped} onClick={this.stopHandler}>Stop</button>
      </div>
      <div>
        <Footer />
      </div>
      </div>
    );
  }
}

export default App;