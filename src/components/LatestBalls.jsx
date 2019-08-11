import React from 'react';
import Ball from './Ball';

const LATEST_BALLS = [
  { number: 23 }, { number: 45 }, { number: 8 }, { number: 75 }, { number: 1 },
];

class LatestBalls extends React.PureComponent {
  render() {
    const balls = [];

    LATEST_BALLS.forEach((ball) => {
      balls.push(<Ball number={ball.number} key={ball.number} pending={false} />);
    });

    return (
      <div className="latest">
        {balls}
      </div>
    );
  }
}

export default LatestBalls;
