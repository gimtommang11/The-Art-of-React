import React from 'react';
import Counter from './components/Counter.jsx';
import Todos from './components/Todos';

const App = () => {
  return (
    <>
      <Counter number={0} />
      <hr />
      <Todos />
    </>
  );
};

export default App;
