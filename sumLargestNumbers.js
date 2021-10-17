const sumLargestNumbers = function (data) {
  let firstNumber = 0;
  let secondNumber = 0;
  let finalNumber = [];
  for (let i = 0; i < data.length; i++){
    if (data[i] > firstNumber) {
      firstNumber = data[i];
      finalNumber[0]= firstNumber;
    }
  }

  for (let j =0; j < data.length; j++) {
      if ((data[j] < finalNumber[0]) && (data[j] > secondNumber)) {
        secondNumber = data[j];
        finalNumber[1] = secondNumber;
      }
  }
  return ("Sum of the two largest numbers is " + (finalNumber[0] + finalNumber[1]));
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));