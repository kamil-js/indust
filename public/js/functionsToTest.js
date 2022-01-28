const returnAnObject = (...args) => {
  let response = {};
  if (args.length) {
    let index = 0;
    args.forEach((arg) => {
      response[index] = arg;
      index++;
    });
  } else {
    response = "No argument was given to the function.";
  }
  return response;
};

returnAnObject();

const multiplyAllByTwo = (arrayOfNumbers) => {
  let response;
  if (
    arrayOfNumbers.constructor.prototype === new Array().constructor.prototype
  ) {
    response = arrayOfNumbers.map((val) => val * 2);
    console.log("arrayTimesTwo: ", response);
  } else {
    response = "The argument is not an Array of numbers";
  }
  return response;
};

multiplyAllByTwo();
