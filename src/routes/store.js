import {createStore} from "redux";

const types = {
  ADD: "ADD",
  DELETE: "DELETE",
};

const addTodo = (text) => {
  return {
    type: types.ADD,
    text,
  };
};

const deleteTodo = (id) => {
  return {
    type: types.DELETE,
    id,
  };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case types.ADD:
      return [{text: action.text, id: Date.now()}, ...state];
    case types.DELETE:
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
};

const store = createStore(reducer);

export const actionCreators = {
  addTodo,
  deleteTodo,
};

export default store;
