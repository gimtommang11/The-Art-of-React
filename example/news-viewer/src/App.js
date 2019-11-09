import React, { useState, useCallback } from 'react';
import axios from 'axios';
import NewsList from './components/NewsList/NewsList';
import Categories from './components/Categories/Categories';

const App = () => {
  const [category, setCategory] = useState('all');
  const onSelect = useCallback(category => {
    setCategory(category);
    console.log(category);
  }, []); // 카테고리 값 업데이트 해주는 함수
  return (
    <>
      <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} />
    </>
  );
};

export default App;
