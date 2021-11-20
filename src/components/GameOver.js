import React from 'react';

const GameOver = (props) => {
    return (
        <div className="overlay">
             <div className="gameover_popup">
            <h2>THE OWL FLEW AWAY</h2>
            <p>Your score: {props.score}</p>
            <button onClick={props.close}>Play Again</button>
            </div>
        </div>
    );
};

export default GameOver;