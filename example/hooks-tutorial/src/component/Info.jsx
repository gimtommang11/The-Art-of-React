import React, {useState, useEffect} from 'react';   //useEffect: 컴포넌트가 렌더링 될 때마다 특정 작업을 수행하도록 설정할 수 있게 하는 hooks

const Info = () => {
  const [name, setName] = useState('');
  const [nickname, SetNickname] = useState('');

  useEffect(() => {   //랜더링 할 때마다 실행됨
    console.log('effect');
    console.log(name);
    return () => {    //cleanup 함수(뒷정리 함수), 컴포넌트가 언마운트 되기 전, 업데이트 되기 직전에 어떤 작업을 수행하고 싶을때 사용
      console.log('cleanup');
      console.log(name)
    }
  },[]);    //언마운트 될 때만 뒷정리 함수를 호출하고 싶을 때 두 번째 파라미터에 빈 배열 넣어주기 

  useEffect(()=> {                               
    console.log('마운트 될 때만 실행됩니다')
  },[])   //두 번째 파라미터로 빈 배열을 넣어주면 마운트 될 때(컴포넌트가 처음 나타날 때)만 실행됨

  useEffect(()=>{
    console.log("닉네임이 변경될때만 실행됩니다")
  }, [name])    //두 번째 파라미터의 배열에 props값이나 state값을 넣어주면 이 값이 업데이틀 될 때만 실행됨

  const onChangeName = e => {
    setName(e.target.value);    //Name 을 특정 타겟의 값으로 바꿔준다는 것
  };

  const onChangeNickname = e =>{
    SetNickname(e.target.value);
  };

  return(
    <div>
      <div>
        <input value ={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickname} />
      </div>
      <div>
        <b>이름 : </b>{name}
      </div>
      <div>
        <b>닉네임 : </b>{nickname}
      </div>
    </div>
  );
}; 

export default Info;