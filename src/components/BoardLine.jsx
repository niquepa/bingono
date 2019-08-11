import React from 'react';
import PropTypes from 'prop-types';
import Ball from './Ball';

class BoardLine extends React.PureComponent {
  render() {
    const balls = [];
    const { numbers, available } = this.props;

    numbers.forEach((ball) => {
      const pending = available.includes(ball);
      balls.push(<Ball number={ball} key={ball} pending={pending} />);
    });

    return (
      <div className="boardLine">
        {balls}
      </div>
    );
  }
}

BoardLine.propTypes = {
  numbers: PropTypes.array.isRequired,
  available: PropTypes.array.isRequired,
};

export default BoardLine;
