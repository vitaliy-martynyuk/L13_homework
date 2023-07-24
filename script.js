const value1 = document.getElementById("value1");
const value2 = document.getElementById("value2");
const result = document.getElementById("result");

const addButton = document.getElementById("add-button");
const subtractButton = document.getElementById("subtract-button");
const multiplyButton = document.getElementById("multiply-button");
const divideButton = document.getElementById("divide-button");
const greaterButton = document.getElementById("greater-button");
const greaterOrEqualsButton = document.getElementById(
  "greater-or-equals-button"
);
const lessButton = document.getElementById("less-button");
const lessOrEqualsButton = document.getElementById("less-or-equals-button");
const equalsButton = document.getElementById("equals");
const strictEquals = document.getElementById("strict-equals");

//Підказка: значення інпутів зберігається під value ключем(value1, value2, result - об'єкти)
//Нагадування: калькулятор для чисел(Number)
addButton.addEventListener("click", () => {
  //сюди код для + логіки
  result.value = Number(value1.value) + Number(value2.value);
});
subtractButton.addEventListener("click", () => {
  //сюди код для - логіки
  result.value = Number(value1.value) - Number(value2.value);
});
multiplyButton.addEventListener("click", () => {
  //сюди код для * логіки
  result.value = Number(value1.value) * Number(value2.value);
});
divideButton.addEventListener("click", () => {
  //сюди код для / логіки
  result.value = Number(value1.value) / Number(value2.value);
});
greaterButton.addEventListener("click", () => {
  //сюди код для > логіки
  result.value = Number(value1.value) > Number(value2.value)
});
greaterOrEqualsButton.addEventListener("click", () => {
  //сюди код для >= логіки
  result.value = Number(value1.value) >= Number(value2.value)
});
lessButton.addEventListener("click", () => {
  //сюди код для < логіки
  result.value = Number(value1.value) < Number(value2.value)
});
lessOrEqualsButton.addEventListener("click", () => {
  //сюди код для <= логіки
  result.value = Number(value1.value) <= Number(value2.value)
});
equalsButton.addEventListener("click", () => {
  //сюди код для == логіки
  result.value = Number(value1.value) == Number(value2.value)
});
strictEquals.addEventListener("click", () => {
  //сюди код для === логіки
  result.value = Number(value1.value) === Number(value2.value)
});
