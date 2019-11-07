import React from 'react';
import * as S from './style';

const NewsItem = ({article}) => {   //article이라는 객체를 props로 받아서 사용함.
  const { title, description, url, urlToImage } = article   // 받은 article 객체 안에 있는 필드를 구조 분해 사용
  return (
      <S.NewsItemContainer>
        {urlToImage && (    //urlToImage props가 있으면 && 뒤의 구문 실행
          <div className="thumbnail">
            <a href={url} target="_blank" rel="noopener noreferrer">   {/*target:_blank는 새 창에서 띄워준다는 의미, rel속성의 값들은 보안 강화해줌 noopener속성으로 열린 탭은 location변경 같은 js 요청을 거부함*/}
            <img src={urlToImage} alt="thumbnail" />
            </a>
          </div>
        )}
        <div className="contents">
          <h2>
            <a herf={url} target="_blank" rel="nooper noreferrer">
              {title}
            </a>
          </h2>
          <p>{description}</p>
        </div>
      </S.NewsItemContainer>
  );
};

export default NewsItem;