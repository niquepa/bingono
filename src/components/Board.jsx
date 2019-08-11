import React from 'react';
import BoardLine from './BoardLine';

const BALLS_1 = Array.from(Array(15).keys(), n => n + 1);
const BALLS_2 = Array.from(Array(15).keys(), n => n + 16);
const BALLS_3 = Array.from(Array(15).keys(), n => n + 31);
const BALLS_4 = Array.from(Array(15).keys(), n => n + 46);
const BALLS_5 = Array.from(Array(15).keys(), n => n + 61);
const AVAILABLE = Array.from(Array(50).keys(), n => n + 1);

class Board extends React.PureComponent {
  render() {
    return (
      <div className="board">
        <BoardLine numbers={BALLS_1} available={AVAILABLE} />
        <BoardLine numbers={BALLS_2} available={AVAILABLE} />
        <BoardLine numbers={BALLS_3} available={AVAILABLE} />
        <BoardLine numbers={BALLS_4} available={AVAILABLE} />
        <BoardLine numbers={BALLS_5} available={AVAILABLE} />
      </div>
    );
  }
}

export default Board;
