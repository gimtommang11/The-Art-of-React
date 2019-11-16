import { createStore } from "redux";

const divToggle = document.querySelector(".toggle");
//const divToggle = document.getElementsByClassName("toggle");
const counter = document.querySelector("h1");
const btnIncrease = document.querySelector("#increase");
const btnDecrease = document.querySelector("#decrease");

//엑션 타입 정의
const TOGGLE_SWITCH = "TOGGLE_SWITCH";
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

//엑션 생성 함수
const toggleSwitch = () => ({ type: TOGGLE_SWITCH }); //객체 리터럴 표현하기 위해 함수 본문을 괄호 속에넣는다.
const increase = difference => ({ type: INCREASE, difference });
const decrease = () => ({ type: DECREASE });

//초깃값 설정
const initialState = {
  toggle: false,
  counter: 0
};

//state가 undefind일때는 initionalState 기본값으로 사용
function reducer(state = initialState, action) {
  //깊지 않은 구조로 만드는게 좋음
  //action.type에 따라 다른 작업 처리
  switch (action.type) {
    case TOGGLE_SWITCH:
      return {
        ...state, //불변성 유지 해야함 -> 전개연산자 사용
        toggle: !state.toggle
      };
    case INCREASE:
      return {
        ...state,
        counter: state.counter + action.difference
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1
      };
    default:
      return state;
  }
}

//스토어 생성 createStore 함수 사용
const store = createStore(reducer); //파라미터에 리듀서 함수 넣어주기

//상태가 변경될 때마다 호출, 이미 html을 사용하여 만들어진 ui의 속성을 상태에 따라 변경
const render = () => {
  const state = store.getState(); //현재 상태 불러옴
  //토글 처리
  if (state.toggle) {
    divToggle.classList.add("active");
  } else {
    divToggle.classList.remove("active");
  }
  //카운터 처리
  counter.innerHTML = state.counter;
};

render();
//엑션이 발생하여 스토어 상태 바뀔때마다 업데이트 됨
store.subscribe(render); //상태바뀔때마다 render 함수 호출

//엑션 발생시키기
divToggle.addEventListener("click", () => {
  store.dispatch(toggleSwitch()); //dispatch 함수에 파라미터로 엑션 객체 넣어줘서 사용
});

btnIncrease.addEventListener("click", () => {
  store.dispatch(increase(1));
});

btnDecrease.addEventListener("click", () => {
  store.dispatch(decrease());
});
