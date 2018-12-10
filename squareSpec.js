function Expect(actual, expected) {
  if(actual != expected) {
    //Run if failed
    document.getElementById("result").innerHTML = "Test Passed";
    console.log("pass")
  } else {
    //Run if successful
   document.getElementById("result").innerHTML = "Test Fail";
     console.log("fail")
  }
};

square = new Square(2);
Expect(square.area(), 1)
console.log(square.area())
