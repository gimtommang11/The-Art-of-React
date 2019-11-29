import React from 'react';

const counter = ({ number, onIncrease, onDecrease }) => {
  return (
    <div>
      <p>{number}</p>
      <button onClick={onDecrease}>-</button>
      <button onClick={onIncrease}> +</button>
    </div>
  );
};

export default counter;
