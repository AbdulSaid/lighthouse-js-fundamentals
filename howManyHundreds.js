var howManyHundreds = function(number) {
  let boxes = Math.floor(number / 100);
  return boxes;
}
console.log(howManyHundreds(894), "=?", 8);