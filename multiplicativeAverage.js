function multiplicativeAverage(array) {
  let result = 1;
  for (let idx = 0; idx < array.length; idx += 1) {
    result *= array[idx];
    // console.log(result);
  }
  return (result / array.length).toFixed(3);
}

console.log(multiplicativeAverage([3, 5]));
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));
console.log(typeof multiplicativeAverage([2, 5, 7, 11, 13, 17]));
