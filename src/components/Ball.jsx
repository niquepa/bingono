import React from 'react';
import PropTypes from 'prop-types';

class Ball extends React.PureComponent {
  render() {
    const { number, pending } = this.props;
    return (
      <span className={pending ? 'ball-pending' : 'ball-confirmed'}>{number}</span>
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
