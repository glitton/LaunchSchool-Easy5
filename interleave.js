// function interleave(arr1, arr2) {
//   //Assumptions: Lengths are equal, arrays are not empty
//   let finalArray = [];
//   for (let idx = 0; idx < arr1.length; idx += 1) {
//     finalArray.push(arr1[idx], arr2[idx]);
//     // console.log(finalArray);
//   }
//   return finalArray;
// }

console.log(interleave([1, 2, 3], ["a", "b", "c"]));

//Using forEach
function interleave(arr1, arr2) {
  //Assumptions: Lengths are equal, arrays are not empty
  let finalArray = [];
  (arr1, arr2).forEach((index) => finalArray.push(arr1[index], arr2[index]));
  return finalArray;
}

console.log(interleave([1, 2, 3], ["a", "b", "c"]));
