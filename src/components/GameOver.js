import React from 'react';

const GameOver = (props) => {
    return (
        <div className="overlay">
             <div className="popup">
            <h2>GAME OVER</h2>
            <p>""</p>
            <p>Your score: {props.score}</p>
            <button onClick={props.close}>X</button>
            </div>
        </div>
    );
};

export default GameOver;