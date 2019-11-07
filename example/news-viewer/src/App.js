import React,{useState} from 'react';
import axios from 'axios';

const App =()=>{
  const [data, setData] = useState(null);
  //Promise 사용
  /* const onClick=()=>{
    axios.get('https://jsonplaceholder.typicode.com/todos/1').then(response => {
      setData(response.data);
    });
  };*/

  // async await 사용
  const onClick = async() =>{
    try{
      const response = await axios.get(   //get 요청)
        'https://newsapi.org/v2/top-headlines?country=kr&apiKey=a0dde6dd23de4de6a2204df46df33894',    //요청할 주소
      );
      setData(response.data);   //response로 받은 갚을 data state에 넣어줌
    }catch(e){    //에러나면 처리
      console.log(e);
    }
  };
  return(
    <>
      <div>
        <button onClick={onClick}>불러오기</button>   {/*이 버튼을 누르면 함수가 실행됩니다(get 요청 서버에 보냄)*/}
      </div>
      {data && <textarea rows={7} value={JSON.stringify(data,null,2)} readOnly={true}></textarea>}    {/*data가 있을 때. <textarea>를 보여줌*/}
    </>
  );
}

export default App;
