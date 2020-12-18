var first = 30;
var second = 10;
var third = 2;

function Add(first, second) {
  return first + second;
}

function Divide(sum, third) {
  var sum = Add(first, second);
  return sum / third;
}
function Show() {
  var sum = Add(first, second);
  var finalscore = Divide(sum, third);
  console.log(finalscore);
}
Show();
