import {
  handleActions
} from 'redux-actions';
import * as api from '../lib/api';
import createRequestThunk from '../lib/createRequestThunk'

// 엑션 타입 생성
// 한 요청당 세 개를 만들어야 함.

const GET_POST = 'sample/GET_POST';
const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS';

const GET_USERS = 'sample/GET_USERS';
const GET_USERS_SUCCESS = 'sample/GET_USERS_SUCCESS';

//thunk 함수 생성
//thunk함수 내부에서는 시작할때, 성공했을때, 실패했을때 다른 액션을 디스패치함

export const getPost = createRequestThunk(GET_POST, api.getPost);
export const getUsers = createRequestThunk(GET_USERS, api.getUsers);

//초기 상태 관리
//요청의 로딩 중 상태는 loading이라는 객체에서 관리함

const initialState = {
  loading: {
    GET_POST: false,
    GET_USERS: false
  },
  post: null,
  users: null
};

const sample = handleActions({
    [GET_POST_SUCCESS]: (state, action) => ({ //이전 형태와 엑션을 받아 다음 상태를 반환
      ...state,
      loading: {
        ...state.loading,
        GET_POST: false
      },
      post: action.payload
      
    }),

    [GET_USERS_SUCCESS]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_USERS: false
      },
      users: action.payload
    }),
  },
  initialState
);

export default sample;