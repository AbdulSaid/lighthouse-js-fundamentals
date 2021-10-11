const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']; 

const finalPosition = function (moves) {
  
  const startPosition = [];
  let xcord = 0;
  let ycord = 0;
  for (let move of moves) {
    if (move === "north"){
      ycord = ycord + 1
    } else if (move === "west"){
      xcord = xcord - 1
    } else if (move === "south"){
      ycord = ycord - 1
    } else if (move === "east"){
      xcord = xcord + 1
    }
  }
  startPosition.push(xcord,ycord);
  return startPosition;
}

console.log(finalPosition(moves));
