import React from 'react';
import { StyledList, StyledLabel, HiddenRadio } from './styled';
import { periodOptions } from './config';

function PeriodButtons({ handlePeriodChange, selectedPeriod }) {
  return (
    <StyledList>
      {periodOptions.map((option) => (
        <li key={option.value}>
          <StyledLabel $active={selectedPeriod === option.value}>
            <HiddenRadio
              value={option.value}
              name="period"
              type="radio"
              onChange={() => handlePeriodChange(option.value)}
            />
            {option.label}
          </StyledLabel>
        </li>
      ))}
    </StyledList>
  );
}

export default PeriodButtons;
