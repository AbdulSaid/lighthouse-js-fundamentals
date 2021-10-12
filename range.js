function range (start,end,step) {
  let output = [];
  if (start === undefined || end === undefined || step === undefined){
    return [];
  } else {
    for (let x = start; x <= end; x += step) {
      output.push(x);
    }
    return output;
  }
}
console.log(range(0, 10, 2));