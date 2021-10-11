var ageCalculator = function(name,yearofBirth,currentYear) {
  let currentAge = currentYear - yearofBirth;
  return name + " is " + currentAge + " years old." 
}

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));