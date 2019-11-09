import React from 'react';
import * as S from './style';
import { NavLink } from 'react-router-dom'; //navLink : 설정한 url이 활성화 되면 스타일 혹은 클래스 지정 가능

const categories = [
  {
    name: 'all', //name : 실제 카테고리 값
    text: '전체 보기', //text : 랜더링할때 사용할 한글 카테고리
  },
  {
    name: 'business',
    text: '비즈니스',
  },
  {
    name: 'entertainment',
    text: '연예',
  },
  {
    name: 'health',
    text: '건강',
  },
  {
    name: 'science',
    text: '과학',
  },
  {
    name: 'sports',
    text: '스포츠',
  },
  {
    name: 'technology',
    text: '기술',
  },
];

const Categories = ({ onSelect, category }) => {
  return (
    <S.CategoriesBlock>
      {categories.map(c => (
        <S.Category
          key={c.name}
          activeClassName="active" //React-Router Link에 이 속성을 주면 Link가 활성화 되었을 때 자동으로 activeClassName이 className으로 적용됨
          active={category === c.name}
          exact={c.name === 'all'} //전체보기는 그냥 / 이기 때문에 이 값 설정하지 않으면 다른 카테고리가 선택되어도 전체보기 링크에 active 스타일 적용되는 오류가 발생함, all이면 true임
          to={c.name === 'all' ? '/' : `/${c.name}`} //실제로 이곳에 할당된 링크로 이동함. all이면 '/' 아니면 주어진 카테고리
        >
          {c.text}
        </S.Category> //categories 배열 안 객체 넣어줌-> 한글로 된 카테고리와 실제 카테고리 값 연결시켜줌
      ))}
    </S.CategoriesBlock>
  );
};

export default Categories;
