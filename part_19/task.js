var num1 = Number(prompt("Enter the first value"));
var num2 = Number(prompt("Enter the second value"));
var num3 = Number(prompt("Enter the third value"));

var result = num1>num2 && num1>num3 ? "First value is bigger !" : num2>num1 && num2>num3 ? "Second value is bigger !" : "Third value is bigger !";
document.write(result);