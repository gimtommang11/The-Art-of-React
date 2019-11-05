import React, {useState} from 'react';    //useState import,이 함수가 호출되면 배열이 반환됨

const Counter = () => {
  const [value, setValue] = useState(0);    //[원소 값, 상태를 설정하는 함수] = useState(상태의 초깃값)
  return(
    <div>
      <p>현제 카운터 값은 <b>{value}</b> 입니다</p>
      <button onClick={()=>setValue(value +1)}>+1</button>    {/* value를 1 더해준다는 뜻*/}
      <button onClick={()=>setValue(value-1)}>-1</button>
    </div>
  );
};

export default Counter;