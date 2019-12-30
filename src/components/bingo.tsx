// src/components/bingo.tsx

import * as React from "react";
import "./bingo.css";
import bingpot from "./bingpot.json";

type BoxState = {};
type BoxProps = { value: string };

class Box extends React.Component<BoxProps, BoxState> {
  render() {
    return (
      <button
        className="box"
        onClick={function() {
          alert("click");
        }}
      >
        {this.props.value}
      </button>
    );
  }
}

class Board extends React.Component<{}, { value: string }> {
  //var allNums: number[];

  getWord(allNums: number[]): string {
    let bingpotArr = bingpot["bingpots"];
    let ranNum = getRandomInt(bingpotArr.length);

    if (allNums.includes(ranNum)) {
      return this.getWord(allNums);
    } else {
      allNums.push(ranNum);
      return bingpotArr[ranNum];
    }
  }

  makeBox(allNums: number[]) {
    var word = this.getWord(allNums);
    return <Box value={word} />;
  }

  render() {
    var allNums: number[] = [200];

    return (
      <div>
        <div className="board-row">
          {this.makeBox(allNums)}
          {this.makeBox(allNums)}
          {this.makeBox(allNums)}
          {this.makeBox(allNums)}
          {this.makeBox(allNums)}
        </div>
        <div className="board-row">
          {this.makeBox(allNums)}
          {this.makeBox(allNums)}
          {this.makeBox(allNums)}
          {this.makeBox(allNums)}
          {this.makeBox(allNums)}
        </div>
        <div className="board-row">
          {this.makeBox(allNums)}
          {this.makeBox(allNums)}
          {this.makeBox(allNums)}
          {this.makeBox(allNums)}
          {this.makeBox(allNums)}
        </div>
        <div className="board-row">
          {this.makeBox(allNums)}
          {this.makeBox(allNums)}
          {this.makeBox(allNums)}
          {this.makeBox(allNums)}
          {this.makeBox(allNums)}
        </div>
        <div className="board-row">
          {this.makeBox(allNums)}
          {this.makeBox(allNums)}
          {this.makeBox(allNums)}
          {this.makeBox(allNums)}
          {this.makeBox(allNums)}
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

function getRandomInt(max: number) {
  let min = Math.ceil(0);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

export default GetBingo;
