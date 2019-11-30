import {
  createAction,
  handleActions
} from 'redux-actions';
import {
  dispatch
} from 'C:/Users/user/AppData/Local/Microsoft/TypeScript/3.6/node_modules/rxjs/internal/observable/pairs';

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// export const increase = {
//   type: INCREASE,
// };

// export const decrease = {
//   type: DECREASE,
// };

// const initialState = {
//   number: 0,
// };

// function reducer(state = initialState, action) {
//   switch (action.type) {
//     case INCREASE:
//       return {
//         ...state,
//         number: state.number + 1,
//       };
//     case DECREASE:
//       return {
//         ...state,
//         number: state.number - 1,
//       };
//     default:
//       return state;
//   }
// }



//엑션생성자 creteAction으로 생성
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

//1초 뒤에 increase 혹은 decrease 함수를 디스패치함
export const increaseAsync = () => dispatch => {
  setTimeout(() => {
    dispatch(increase());
  }, 1000)
};

export const decreaseAnsync = () => dispatch => {
  setTimeout(() => {
    dispatch(decrease())
  }, 1000)
}

const initialState = 0;

//reducer handleActions로 만듦
const counter = handleActions({
    [INCREASE]: state => state + 1,
    [DECREASE]: state => state - 1,
  },
  initialState,
);

export default counter;