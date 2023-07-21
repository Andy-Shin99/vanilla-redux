const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const counter = document.getElementById("counter");

let count = 0;

counter.innerText = count;

const updateText = () => {
  counter.innerText = count;
};

plus.addEventListener("click", () => {
  count++;
  updateText();
});

minus.addEventListener("click", () => {
  count--;
  updateText();
});
