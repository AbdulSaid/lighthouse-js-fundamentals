let age = 12
const whichSchool  = function (age) {
  if (age < 13) {
    console.log("Elementary School")
  } else if (age >= 13 || age <= 18) {
    console.log("Secondary School")
  } else {
    console.log("Lighthouse Labs")
  }
}

whichSchool(13)

AssertionError: expected undefined to equal 'Secondary School'
    at n.eval (eval at <anonymous> (https://web.compass.lighthouselabs.ca/assets/application-5a91c61206a8ecbf92fae5ffa1497d961ffe55f760c5696b7d8bdc7068e0057d.js:2165:7194), <anonymous>:14:36)
    at t (https://cdnjs.cloudflare.com/ajax/libs/mocha/2.3.4/mocha.min.js:7:33286)
    at d.q.run (https://cdnjs.cloudflare.com/ajax/libs/mocha/2.3.4/mocha.min.js:7:33226)
    at j.runTest (https://cdnjs.cloudflare.com/ajax/libs/mocha/2.3.4/mocha.min.js:7:37528)
    at https://cdnjs.cloudflare.com/ajax/libs/mocha/2.3.4/mocha.min.js:7:38287
    at z (https://cdnjs.cloudflare.com/ajax/libs/mocha/2.3.4/mocha.min.js:7:36930)
    at https://cdnjs.cloudflare.com/ajax/libs/mocha/2.3.4/mocha.min.js:7:36999
    at A (https://cdnjs.cloudflare.com/ajax/libs/mocha/2.3.4/mocha.min.js:7:36459)
    at https://cdnjs.cloudflare.com/ajax/libs/mocha/2.3.4/mocha.min.js:7:36812
    at j (https://cdnjs.cloudflare.com/ajax/libs/mocha/2.3.4/mocha.min.js:14:70309)
