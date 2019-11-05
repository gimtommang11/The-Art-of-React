import React, {useReducer} from 'react' 

function reducer(state, action){    //현제 상태, action 전달받아 새로운 상태 반환하는 함수
  switch(action.type){
    case 'INCREMENT':
      return{value: state.value+1};
    case 'DECREMENT':
      return{value : state.value -1};
    default:
      //아무것도 해당되지 않을 때 기존 상태 반환
      return state;
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, {value: 0});    //첫 번째 파라미터: 리듀서 함수, 두 번째 파라미터: 해당 리듀서의 기본값
  return(                                                      //state값, dispatch함수 받아옴. dispatch는 엑션 발생 함수.
    <div>
      <p>
        현제 카운터 값은 <b>{state.value}</b>입니다.
      </p>
      <button onClick={() => dispatch({type : 'INCREMENT'})}>+1</button>
      <button onClick={()=> dispatch({type: 'DECREMENT'})}>  -1 </button>
    </div>
  );
};

export default Counter;