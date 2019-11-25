import React from 'react';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';

const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <div>
      <Counter number={number} onIncrease={increase} onDecrease={decrease} />
    </div>
  );
};

//스토어 안 상태 컴포넌트 props로 넘겨주기 위해 설정
const mapStateToPrpos = state => ({
  //state는 현재 스토어가 지니고있는 상태
  number: state.counter.number,
});

//엑션 생성 함수 props로 넘겨주기 위새 설정
const mapDispatchToProps = dispatch => ({
  //내장함수 dispatch 파라미터로 받아오기
  increase: () => {
    dispatch(increase());
  },
  decrease: () => {
    dispatch(decrease());
  },
});

export default connect(mapStateToPrpos, mapDispatchToProps)(CounterContainer);
