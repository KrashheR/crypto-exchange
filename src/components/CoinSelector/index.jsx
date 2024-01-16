import React from 'react';
import { StyledCoinSelector } from './styled';

const CoinSelector = ({ coins, selectedCoin, handleCoinSelect }) => {
  return (
    <StyledCoinSelector value={selectedCoin} onChange={(e) => handleCoinSelect(e.target.value)}>
      {coins.map((coin, index) => (
        <option key={coin + index} value={coin}>
          {coin}
        </option>
      ))}
    </StyledCoinSelector>
  );
};

export default React.memo(CoinSelector);
