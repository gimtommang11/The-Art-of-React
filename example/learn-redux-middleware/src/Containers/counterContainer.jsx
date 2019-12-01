import React from 'react';
import { connect } from 'react-redux';
import { increaseAsync, decreaseAnsync } from '../modules/counter';
import Counter from '../Components/counter';

//비동기 가능하게 수정
const CounterContainer = ({ increaseAsync, decreaseAnsync, number }) => {
  return (
    <Counter
      number={number}
      onIncrease={increaseAsync}
      onDecrease={decreaseAnsync}
    />
  );
};

export default connect(
  state => ({
    number: state.counter,
  }),
  {
    //mapDispatchToProps에 해당하는 파라미터를 함수 형태가 아닌 액션 생성 함수로 이루어진 객체  형태로 넣어줌.
    //두 번째 파라미터를 객체 형태로 넣어주면 connect함수가 내부적으로 이 작업을 대신해줌
    increaseAsync,
    decreaseAnsync,
  },
)(CounterContainer);
