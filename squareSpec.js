function Expect(actual, expected) {
  if(actual != expected) {
    //Run if failed
    document.getElementById("result").innerHTML = "Test Fail";
    throw {type: "Test Fail", details: {actual: actual, expected: expected}};
  } else {
    //Run if successful
   document.getElementById("result").innerHTML = "Test Pass";
   throw {type: "Test passed", details: {actual: actual, expected: expected}};
  }
};

var describe = function(message, testFunc) {
  try {
    testFunc();
  } catch(err) {
    console.error(message, err);
  }
};

describe("Checking square area", function() {
square = new Square(2);
Expect(square.area(), 1)
});
