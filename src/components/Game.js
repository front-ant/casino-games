import React from "react";
const Game = (props) => (
      <div className="game-entry">
        <img src={props.image} className="game-img" alt={props.title}></img>
        <div className="game-text">
          <h3 className="game-title">{props.title}</h3>
          <p className="game-description">{props.description}</p>
        </div>
      </div>
)

export default Game;
