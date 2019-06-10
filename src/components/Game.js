import React from "react";
const Game = (props) => (
  <li>
    {props.title}
      <div>
        <img src={props.image}></img>
        <p>{props.description}</p>
      </div>
  </li>
)

export default Game;
