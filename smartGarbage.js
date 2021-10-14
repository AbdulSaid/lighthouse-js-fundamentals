const smartGarbage = function(trash,bins) {
  if(trash === 'waste'){
    bins.waste++
    return bins
  } else if (trash === 'recycling') {
    bins.recycling++
    return bins
  } else if (trash === 'compost') {
    bins.compost++
    return bins
  }
}

console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));
