var first = 200;
var second = 10;
var third = 2;

function Add(first, second) {
  return first + second;
}

function Divide(sum, third) {
  return sum / third;
}
function Show() {
  var sum = Add(first, second);
  var finalscore = Divide(sum, third);
  console.log(`${first} dodać ${second} a nastepnie dzielone przez ${third} rowna sie ${finalscore}`);
}
Show();
