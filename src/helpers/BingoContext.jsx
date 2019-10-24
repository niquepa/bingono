import React, { useState } from 'react';

const BingoContext = React.createContext();

//const defaultState = {
//  userId: '',
//  email: '',
//};

const defaultBalls = Array.from(Array(75).keys(), n => n + 1);
const defaultLastBalls = [{ number: 1 }, { number: 75 }, { number: 2 }, { number: 74 }, { number: 23 }];
const defaultAvailableBalls = Array.from(Array(50).keys(), n => n + 1);

const BingoProvider = ({ children }) => {
  const [balls, setBalls] = useState(defaultBalls);
  const [lastBalls, setLastBalls] = useState(defaultLastBalls);
  const [availableBalls, setAvailableBalls] = useState(defaultAvailableBalls);

  return (
    <BingoContext.Provider value={{ balls, lastBalls, setLastBalls, availableBalls }}>
      {children}
    </BingoContext.Provider>
  );
};

const BingoConsumer = BingoContext.Consumer;

export { BingoProvider, BingoConsumer };
