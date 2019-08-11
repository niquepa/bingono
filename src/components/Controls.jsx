import React from 'react';

class Controls extends React.PureComponent {
  render() {
    return (
      <div className="controls">
        <div className="">
          <button className="button newBall">New Ball</button>
        </div>
        <div className="">
          <button className="button newGame">New Game</button>
        </div>  
      </div>
    );
  }
}

export default Controls;
