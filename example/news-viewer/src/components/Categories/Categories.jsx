import React from 'react';
import * as S from './style';

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
          active={category === c.name}
          onClick={() => onSelect(c.name)}
        >
          {c.text}
        </S.Category> //categories 배열 안 객체 넣어줌-> 한글로 된 카테고리와 실제 카테고리 값 연결시켜줌
      ))}
    </S.CategoriesBlock>
  );
};

export default Categories;
