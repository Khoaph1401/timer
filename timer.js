let object = {
  field1: "1",
  field2: 2,
};

function func1() {
  x = 5;
}

function func2() {
  var x = x + 1;
  console.log(x);
}
console.log(object["field1"]);
console.log(object["field2"]);
console.log(object.field2);
func2();

var time = 10;
function Timer() {
  console.log(time); //hien thi
  time = time - 1; //giam 1 giay
  if (time === -1) {
    clearInterval(i); //dung vong lap khi time = 0
  }
}

var i = setInterval(Timer, 1000); // intervalID

console.log(time);
