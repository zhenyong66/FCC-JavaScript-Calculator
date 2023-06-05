var lastOperator = "";
var result = "";
var lastExpression = "";

function pressNum(key) {
  var x = document.getElementById('display').innerHTML;
  if (x === '0') {
    result += key;
    document.getElementById('display').innerHTML = key;
  }
  else {
    result += key;    
    document.getElementById('display').innerHTML += key;
  }
}

function pressOperator(key) {
  var x = document.getElementById('display').innerHTML;
  if (key == '-') {
    x += key;
    result = x;
  }
  else {
    if (x.endsWith("+") == true || x.endsWith("-") == true || x.endsWith("*") == true || x.endsWith("/") == true) {
      x = lastExpression.slice(0,-1) + key;
      lastExpression = x;
      result = x;
    }
    else {
      x += key;
      lastExpression = x;
      result = x;
    }
  }
  lastOperator = key;
  document.getElementById('display').innerHTML += key;
}

function dot() {
  var x = document.getElementById('display').innerHTML;
  if (lastOperator == "+" || lastOperator == "-" || lastOperator == "*" || lastOperator == "/") {
    var allNum = x.split(lastOperator);
    var lastNum = allNum[allNum.length-1];
    if (lastNum.indexOf(".") == -1) {
      x += ".";
      result += ".";
    }
  }
  else {
    if (x.indexOf(".") == -1) {
      x += ".";
      result += ".";
    }
  }
  document.getElementById('display').innerHTML = x;
}

function clr() {
  result = "";
  document.getElementById('display').innerHTML = "0";
}

function calc() {
  document.getElementById('display').innerHTML = eval(result);
}

function myFunction() {
  var x = "123+";
  x = x.slice(0,-1) + "-";
  document.getElementById('display').innerHTML = result;
}