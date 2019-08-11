import React from 'react';
import PropTypes from 'prop-types';

class Ball extends React.PureComponent {
  render() {
    const { number, pending } = this.props;
    const classes = `ball ${pending ? ' ball-pending' : ' ball-confirmed'}`;
    return (
      <div className="centered">
        <div className={classes}>{number}</div>
      </div>
    );
  }
}

Ball.propTypes = {
  number: PropTypes.number.isRequired,
  pending: PropTypes.bool,
};

Ball.defaultProps = {
  pending: true,
};

export default Ball;
