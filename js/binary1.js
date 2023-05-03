function binary_search(arr, val) {
  /* 1. establish lower and upper bounds of where the value we are searching for is located */
  /* lower bound is the first value in the array, upper bound is the last value, set using index vals */
  let lower_bound = 0; //idx of first element
  let upper_bound = arr.length - 1; // idx of last element

  //loop, where we would keep inspecting the middlemost value between the upper and lower bounds

  while (lower_bound <= upper_bound) {
    //find midpoint between upper and lower bounds (index)
    let midpoint = Math.floor((upper_bound + lower_bound) / 2);
    let value = arr[midpoint];
    //if the value at midpoint is what we are looking for, we are done
    //else we change the lower or upper bound baed on whether we need to guess higher or lower

    if (val === value) {
      return midpoint;
    } else if (val < value) {
      upper_bound = midpoint - 1;
    } else if (val > value) {
      lower_bound = midpoint + 1;
    }
  }
  return null;
}

console.log(binary_search([3,4,6,8,12,15], 4));