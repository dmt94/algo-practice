function gridTrip(startPos, moves) {
  let x = startPos[0];
  let y = startPos[1];

  let direction = '';
  let units = '';
  for (let i = 0; i < moves.length; i++) {
    if (moves[i] === 'U' || moves[i] === 'D' || moves[i] === 'R' || moves[i] === 'L') {
      direction = moves[i];
      units = '';
    } else {
      units += moves[i];
      if (i === moves.length - 1 || moves[i + 1] === 'U' || moves[i + 1] === 'D' || moves[i + 1] === 'R' || moves[i + 1] === 'L') {
        units = parseInt(units);
        if (direction === 'U') {
          x += units;
        } else if (direction === 'D') {
          x -= units;
        } else if (direction === 'R') {
          y += units;
        } else {
          y -= units;
        }
      }
    }
  }

  return [x, y];
}


console.log(gridTrip([0, 0], 'U2R1')); // [2, 1]
console.log(gridTrip([5, 10], 'D5L15U2')); // [2, -5]
console.log(gridTrip([-22, 100], 'L2L15D50U1D9')); // [-80, 83]
