const CHANGE_INPUT = 'todos/CHANGE_INPUT';
const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';

export const changeInput = input => ({
  //인풋 값을 변경해주어야 하는 것이기 때문에 객체에 넣어줌
  type: CHANGE_INPUT,
  input,
});

let id = 3; //insert가 호출될때마다 1씩 더해짐
export const insert = text => ({
  type: INSERT,
  todo: {
    id: id++, //파라미터 대신 id 값에도 의존함
    text,
    done: false,
  },
});

export const toggle = id => ({
  type: TOGGLE,
  id,
});

export const remove = id => ({
  type: REMOVE,
  id,
});

const initionalState = {
  input: '',
  todos: [{
      id: 1,
      text: '포트폴리오 다썻땅',
      done: true,
    },
    {
      id: 2,
      text: '리엑트 책 다 읽깅',
      done: false,
    },
  ],
};

function todos(state = initionalState, action) {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        input: action.input,
      };
    case INSERT:
      return {
        todos: state.todos.concat(action.todo),
      };
    case TOGGLE:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.id ? {
            ...todo,
            done: !todo.done
          } : todo,
        ),
      };
    case REMOVE:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.id),
      };
    default:
      return state;
  }
}

export default todos;