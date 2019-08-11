import React from 'react';
import LatestBalls from './LatestBalls';
import Board from './Board';
import Controls from './Controls';

function App() {
  return (
    <div className="App">
      <LatestBalls />
      <Controls />
      <Board />
    </div>
  );
}

export default App;
