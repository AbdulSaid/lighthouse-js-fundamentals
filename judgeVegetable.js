const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

const judgeVegetable = function(vegetables,metric) {
  let bestTomato = 0;
  let winner;
  for (var i = 0; i < vegetables.length; i++) {
    if (vegetables[i][metric] > bestTomato){
        bestTomato = vegetables[i][metric];
        winner = vegetables[i].submitter
    }
  }
  return winner;
}

console.log(judgeVegetable(vegetables, metric));

const instructorWithLongestName = function(instructors) {
  let longestName = ""
  for (let i = 0; i < instructors.length; i++){
    // let nameLength = instructors[i].name
    if (instructors[i].name.length > longestName.length){
      longestName = instructors[i].name
    }
  }
  return longestName
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));