import React from 'react';
import { connect } from 'react-redux';
import { increase, decrease } from '../models/counter';
import Counter from '../Components/counter';

const CounterContainer = ({ increase, decrease, number }) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};

export default connect(
  state => ({
    number: state.counter,
  }),
  {
    //mapDispatchToProps에 해당하는 파라미터를 함수 형태가 아닌 액션 생성 함수로 이루어진 객체  형태로 넣어줌.
    //두 번째 파라미터를 객체 형태로 넣어주면 connect함수가 내부적으로 이 작업을 대신해줌
    increase,
    decrease,
  },
)(CounterContainer);
