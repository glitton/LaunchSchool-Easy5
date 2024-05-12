const multiplyList = (arr1, arr2) => {
  let finalArray = [];
  for (let i = 0; i < arr1.length; i++) {
    finalArray.push(arr1[i] * arr2[i]);
  }
  return finalArray;
};

console.log(multiplyList([3, 5, 7], [9, 10, 11]));
console.log(multiplyList([0, 3, 6], [3, 12, 21]));
