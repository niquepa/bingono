import React from 'react';
import LatestBalls from './LatestBalls';
import Board from './Board';
import Controls from './Controls';
import { BingoProvider } from '../helpers/BingoContext';

function App() {
  return (
    <BingoProvider>
      <div className="App">
        <LatestBalls />
        <Controls />
        <Board />
      </div>
    </BingoProvider>
  );
}

export default App;
