import {
  createAction,
  handleActions
} from 'redux-actions';

const START_LOADING = 'loading/START_LOADING';
const FINISH_LOADIG = 'loading/FINISH_LOADING';

//요청을 위한 엑션 타입 payload로 설정함

//엑션생성자
export const startLoading = createAction(
  START_LOADING,
  requestType => requestType,
);

export const finishLoading = createAction(
  FINISH_LOADIG,
  requestType => requestType,
);

const initialState = {};

//리듀서
const loading = handleActions({
    [START_LOADING]: (state, action) => ({
      //요청 시작시 dispatch
      //엑션 타입에 접두사가 들어있기 때문에 괄호를 붙여줌
      ...state,
      [action.payload]: true,
    }),
    [FINISH_LOADIG]: (state, action) => ({
      //요청 끝났을때 dispatch
      ...state,
      [action.payload]: false,
    }),
  },
  initialState,
);

export default loading;