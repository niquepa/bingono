import React from 'react';
import Ball from './Ball';
import { BingoConsumer } from '../helpers/BingoContext';

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
      <BingoConsumer>
        {({lastBalls}) => (
          <div className="latest">
            {lastBalls.map((ball) => (
              <Ball number={ball.number} key={ball.number} pending={false} />
            ))}
          </div>
        )}          
      </BingoConsumer>
    );
  }
}

export default LatestBalls;
