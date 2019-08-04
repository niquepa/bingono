import React from 'react';
import Ball from './Ball';

const BALLS = Array.from(Array(75).keys(), n => n + 1);
const AVAILABLE = Array.from(Array(50).keys(), n => n + 1);

class Board extends React.PureComponent {
  render() {
    const balls = [];

    BALLS.forEach((ball) => {
      const css = AVAILABLE.includes(ball) ? 'pending' : 'confirmed';
      balls.push(<Ball number={ball} key={ball} css={css} />);
    });

    return (
      <React.Fragment>
        <h4>Board</h4>
        {balls}
      </React.Fragment>
    );
  }
}

export default Board;
