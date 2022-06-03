import React from 'react';

const CounterButton = ({ count, minusCount, plusCount }) => (
  <div>
    <button type="button" onClick={minusCount}>-</button>
    <span>{count}</span>
    <button type="button" onClick={plusCount}>+</button>
  </div>
);

export default CounterButton;
