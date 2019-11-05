import React, {useState , useMemo, useCallback, useRef} from 'react'

const getAvarage = numbers => {
  console.log("평균값 계산중 ..");
  if(numbers.length === 0) return 0;
  const sum = numbers.reduce((a,b)=>a+b);
  return sum / numbers.length;
} ;

const Average =()=>{
  const [list,setList] = useState([]);
  const [number,setNumer] = useState('');
  const inputEl = useRef(null);  

  const onChange = useCallback(e => {   
    setNumer(e.target.value);   //첫 번째 파라미터에 생성하고 싶은 함수
  },[])   //컴포넌트가 처음 렌더링 될 때만 '함수 생성'

  const onInsert = useCallback(()=>{
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumer('');
    inputEl.current.focus();
  },[number, list]);    //number 혹은 list가 바뀌었을 때만 함수 생성

  const avg= useMemo(()=>getAvarage(list),[list]);  //두번째 파라미터 배열[특정 값]이 바뀔때만 연산 실행, 바뀌지 않으면 이전 연산결과 사용함.
  
  return(
    <div>
      <input value={number} onChange={onChange}/>
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값:</b>{avg}
      </div>
    </div>
  )
}

export default Average;