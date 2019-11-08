import React,{useState, useEffect} from 'react';
import NewsItem from '../NewItem/NewsItem';
import { NewsListBlock } from './style';
import Axios from 'axios';

const NewsList = () =>{
  const [articles, setArticles]= useState(null);
  const [loading, setLoading] = useState(false);    //api 요청이 대기중인지 판별

  useEffect(()=>{   //useEffect 이용해서 컴포넌트가 처음 랜더링 되는 시점에 api 요청
    //async 사용하는 함수 따로 선언
    const fetchData = async () => {   //useEffect에서 반환하는 값은 뒷정리 함수라서 등록하는 함수는 async안됨 
      setLoading(true);   //함수 호출되면 loading true
      try{
        const response = await Axios.get(   //get 요청
          'https://newsapi.org/v2/top-headlines?country=kr&apiKey=a0dde6dd23de4de6a2204df46df33894',
        );
        setArticles(response.data.articles);
      }
      catch(e){   //에러잡기
        console.log(e);
      }
      setLoading(false);    //함수 호출되지 않으면 loading false
    };
    fetchData();    //함수 호출
  }, []);

  //대기 중 일때
  if(loading){    //대기중일때 택스트 띄워줌
    return<NewsListBlock>대기중</NewsListBlock>
  }
  //아직 article 값이 설정되지 않았을 때 체크
  if(!articles){    //데이터가 없을 때, map 함수를 사용할수가 없기 때문에 랜더링 과정에서 오류가 발생함
    return null
  }
  //article 값이 유효할 때
  return(
    <NewsListBlock>
      {articles.map(article => (    //map 함수를 이용해 각 article 그려줌
        <NewsItem key={article.url} article={article} />    //정보 PROPS로 넘겨주기
      ))}
    </NewsListBlock>
  );
};

export default NewsList;