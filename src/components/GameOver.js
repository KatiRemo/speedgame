import React from 'react';

const GameOver = (props) => {
    return (
        <div>
            <h2>GAME OVER</h2>
            <p>Your score: {props.score}</p>
            <button onClick={props.close}>X</button>
        </div>
    );
};

export default GameOver;