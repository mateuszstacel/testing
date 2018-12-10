var assert = function(actual, expected) {
  if(actual != expected) {
    //Run if failed
    throw {type: "Fail", details: {actual: actual, expected: expected}};
  } else {
    //Run if successful
    console.log("Success", {type: "Test passed", details: {actual: actual, expected: expected}});
  }
};

var square = new Square();
// assert(square(2), 1);
