import React from 'react';
import NewsItem from '../NewItem/NewsItem';
import { NewsListBlock } from './style';

const sampleArticle ={
  title: '제목',
  description: '내용',
  url : 'https://google.com',
  urlToImage: 'https://via.placholder.com/160',  
};

const NewList = () => {
  return(
    <NewsListBlock>
      <NewsItem article={sampleArticle} />    {/*NewItem 컴포넌트 ariticle props로 sampleArticle 객체 넘겨줌*/}
      <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} />
    </NewsListBlock>
  );
}

export default NewList;