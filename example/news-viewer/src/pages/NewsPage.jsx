import React from 'react';
import Categories from '../components/Categories/Categories';
import NewsList from '../components/NewsList/NewsList';

//리엑트 라우터의 url 파라미터를 이용해서 카테고리 값 관리
const NewsPage = ({ match }) => {   //match 객체: 어떤 라우트에 매칭이 되었는지에 대한 정보가 있음, params정보 가지고있음
  //카테고리가 선택되지 않았으면 기본값 all
  const category = match.params.category || 'all';    //App.js에서 만든 category라는 params match.params.category로 조회
  return (
    <>
      <Categories />
      <NewsList category={category} />    
    </>
  );
};

export default NewsPage;
