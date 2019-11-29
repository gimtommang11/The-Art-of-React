import {
  createAction,
  handleActions
} from 'redux-actions';

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

const initialState = 0;

//reducer handleActions로 만듦
const counter = handleActions({
    [INCREASE]: state => state + 1,
    [DECREASE]: state => state - 1,
  },
  initialState,
);

export default counter;