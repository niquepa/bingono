import React from 'react';
import PropTypes from 'prop-types';

class Ball extends React.PureComponent {
  render() {
    const { number, css } = this.props;
    return (
      <p className={css}>{number}</p>
    );
  }
}

Ball.propTypes = {
  number: PropTypes.number.isRequired,
  css: PropTypes.string,
};

Ball.defaultProps = {
  css: 'pending',
};
export default Ball;
