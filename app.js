let sum = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multi = (a, b) => a * b;
let division = (a, b) => a / b;

function calculate(num1, num2, operator) {
    let filter = isNaN(num1) || isNaN(num2) ? "error" : operator;
switch (filter) {
    case "sum":
      return sum(num1, num2);
    case "subtrac":
      return subtract(num1, num2);
    case "mult":
      return multi(num1, num2);
    case "division":
      return division(num1, num2);
    default:
      return filter;
  }
}

function handleCalculate(e) {
  let num1 = parseInt(document.querySelector(".num1").value);
  let num2 = parseInt(document.querySelector(".num2").value);
    
  document.querySelector(".result>span").innerHTML = calculate(num1, num2, e.target.id);
}

document.querySelector("#sum").addEventListener("click", handleCalculate);
document.querySelector("#subtrac").addEventListener("click", handleCalculate);
document.querySelector("#mult").addEventListener("click", handleCalculate);
document.querySelector("#division").addEventListener("click", handleCalculate);
