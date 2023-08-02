const value1 = document.getElementById("value1");
const value2 = document.getElementById("value2");
result.value = document.getElementById("result");

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
result.value = undefined

addButton.addEventListener("click", () => {
  result.value = Number(value1.value) + Number(value2.value)
  
  //сюди код для + логіки
});
subtractButton.addEventListener("click", () => {
  result.value = Number(value1.value) - Number(value2.value)
  //сюди код для - логіки
});
multiplyButton.addEventListener("click", () => {
  result.value = Number(value1.value) * Number(value2.value)
  //сюди код для * логіки
});
divideButton.addEventListener("click", () => {
  //сюди код для / логіки
  result.value = Number(value1.value) / Number(value2.value)
});
greaterButton.addEventListener("click", () => {
  result.value = Number(value1.value) > Number(value2.value)
  //сюди код для > логіки
});
greaterOrEqualsButton.addEventListener("click", () => {
  result.value = Number(value1.value) >= Number(value2.value)
  //сюди код для >= логіки
});
lessButton.addEventListener("click", () => {
  result.value = Number(value1.value) < Number(value2.value)
  //сюди код для < логіки
});
lessOrEqualsButton.addEventListener("click", () => {
  result.value = Number(value1.value) <= Number(value2.value)
  //сюди код для <= логіки
});
equalsButton.addEventListener("click", () => {
  result.value = Number(value1.value) == Number(value2.value)
  //сюди код для == логіки
});
strictEquals.addEventListener("click", () => {
  result.value = Number(value1.value) == Number(value2.value)
  //сюди код для === логіки
});
