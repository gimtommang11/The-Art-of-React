import React, { useState, useCallback } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import NewsPage from './pages/NewsPage';

//현재 선택된 category 값  URL 파라미터 통해 사용할것 -> Categories컴포넌트에서 선택된 카테고리 값 따로 알려줄 필요가 없음
const App = () => {
  return <Route path="/:category?" component={NewsPage} />; // /:category 는 category라는 params 를 생성해준 것, 뒤에 ?문자가 들어가 있으면 선택적 이라는 뜻(있어도되고없어도됨)
};

export default App;
