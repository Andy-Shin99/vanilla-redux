import {createStore} from "redux";

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const counter = document.getElementById("counter");

counter.innerText = 0;

const PLUS = "ADD";
const MINUS = "MINUS";

const countModifier = (count = 0, action) => {
  switch (action.type) {
    case PLUS:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};

const countStore = createStore(countModifier);

const onChange = () => {
  counter.innerText = countStore.getState();
};

countStore.subscribe(onChange);

plus.addEventListener("click", () => {
  countStore.dispatch({type: PLUS});
  return;
});

minus.addEventListener("click", () => {
  countStore.dispatch({type: MINUS});
  return;
});
