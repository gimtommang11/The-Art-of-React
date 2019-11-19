//엑션 타입 정의
const INCREASE = 'counter/INCREASE'; // 모듈 이름/ 엑션 이름
const DECREASE = 'counter/DECREASE';

//엑션 함수 생성
export const increase = () => ({
  //export로는 여러개 내보낼 수 있음.
  //export를 통해 이 함수를 다른 파일에서 사용 가능
  type: INCREASE,
});
export const decrease = () => ({
  type: DECREASE,
});

const initialState = {
  number: 0,
};

function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return { number: state.number + 1 };
    case DECREASE:
      return { number: state.number + 1 };
    default:
      return state;
  }
}

export default counter; //default로는 하나만 내보낼 수 있음
