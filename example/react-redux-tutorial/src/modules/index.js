// 파일명 index.js로 명명해주면 
// 여러 개의 리듀서 -> 스토어의 생성할때 파라미터에는 하나의 리듀서만 사용해야함 -> 리듀서 하벼주기
import { combineReducers } from 'redux'; //리듀서를 하나로 합쳐 주는 유틸 함수
import counter from './counter';
import todos from './todos';

const rootReducer = combineReducers({     //combinereducers를 통해 rootReducer로 묶어줌
  counter,
  todos,
});

export default rootReducer;
