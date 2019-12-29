// src/components/bingo.tsx

import * as React from "react";
import "./bingo.css";
//import bingpot from "./bingpot.json";

class Square extends React.Component {
  render() {
    return <button className="square">{/* TODO */}</button>;
  }
}

class Board extends React.Component {
  renderSquare(i: number) {
    return <Square />;
  }

  render() {
    const status = "Next player: X";

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
      </div>
    );
  }
}

class GetBingo extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

/*function GetBingo() {
  let bingpotArr = bingpot["bingpots"];
  let ranNum = getRandomInt(bingpotArr.length);
  return (
    <div className="Board">
      <div className="board-row">
        {this.renderSquare(bingpotArr)}
        {this.renderSquare(1)}
        {this.renderSquare(2)}
      </div>
      <div className="board-row">
        {this.renderSquare(3)}
        {this.renderSquare(4)}
        {this.renderSquare(5)}
      </div>
      <div className="board-row">
        {this.renderSquare(6)}
        {this.renderSquare(7)}
        {this.renderSquare(8)}
      </div>
    </div>
    /*    <div className="Bingo">
      <div className="field1">You got {bingpotArr[ranNum]}</div>
    </div>
  );
}

function getRandomInt(max: number) {
  let min = Math.ceil(0);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}*/

export default GetBingo;
