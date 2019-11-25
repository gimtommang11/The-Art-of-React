import React from 'react';
import Counter from './components/Counter.jsx';
import Todos from './components/Todos';
import CounterContainer from './containers/CounterContainer.jsx';
import TodosContainer from './containers/TodosContainer.jsx';

const App = () => {
  return (
    <>
      <CounterContainer />
      <hr />
      <TodosContainer />
    </>
  );
};

export default App;
