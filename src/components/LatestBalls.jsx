import React from 'react';
import Ball from './Ball';

const LATEST_BALLS = [
  { number: 23 }, { number: 45 }, { number: 8 }, { number: 75 }, { number: 1 },
];

class LatestBalls extends React.PureComponent {
  render() {
    const balls = [];

    LATEST_BALLS.forEach((ball) => {
      balls.push(<Ball number={ball.number} key={ball.number} css="confirmed" />);
    });

    return (
      <React.Fragment>
        <h4>Latest Balls</h4>
        {balls}
      </React.Fragment>
    );
  }
}

export default LatestBalls;
