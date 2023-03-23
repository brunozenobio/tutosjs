let result = document.getElementById("result");

function insertNumber(number) {
  result.value += number;
}

function insertOperator(operator) {
  result.value += operator;
}

function clearScreen() {
  result.value = "";
}

function backspace() {
  result.value = result.value.slice(0, -1);
}

function calculate() {
  result.value = eval(result.value);
}