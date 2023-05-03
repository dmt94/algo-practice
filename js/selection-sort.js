function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowestNumIdx = i;
    
    for (let j = i + 1; j < arr.length; j++) {
      //inner loop starts with the value in the next position from the outer loop
      //loop through the rest vals in the array, to determine the lowest num idx
      if (arr[j] < arr[lowestNumIdx]) {
        lowestNumIdx = j;
      }
    }
    if (lowestNumIdx !== i) {
      //after finding the lowesNumIdx from looping through all the vals in the array, comparing it with the first value of the array

      let temp = arr[i];
      //set a temporary variable to the first value in the array,
      //which we will later switch with the next lowest value found in the array
      arr[i] = arr[lowestNumIdx];
      // switch the first value in the array with the lowest value found from the inner loop, 
      arr[lowestNumIdx] = temp;
    }
  }
  return arr;
}

console.log(selectionSort([4,14,5,3,2,11,1]));