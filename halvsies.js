// function halvsies(array) {
//   let halfArray1 = [];
//   let halfArray2 = [];
//   let finalArray = [];

//   if (array.length)
//     if (array.length % 2 === 0 || array.length <= 1) {
//       //if array length is even, put even number in two arrays
//       halfArray1 = array.slice(0, array.length / 2);
//       halfArray2 = array.slice(array.length / 2);
//       // console.log(finalArray);
//     } else {
//       // array length is odd, middle element goes to first array
//       halfArray1 = array.slice(0, (array.length - 1) / 2);
//       halfArray2 = array.slice((array.length - 1) / 2);
//     }
//   finalArray = finalArray.concat([halfArray1], [halfArray2]);
//   return finalArray;
// }

//Launch school solution
function halvsies(array) {
  let half = Math.ceil(array.length / 2);
  let firstArray = array.slice(0, half);
  let secondArray = array.slice(half);
  return [firstArray, secondArray];
}

console.log(halvsies([1, 2, 3, 4]));
console.log(halvsies([1, 5, 2, 4, 3]));
console.log(halvsies([7]));
console.log(halvsies([]));
