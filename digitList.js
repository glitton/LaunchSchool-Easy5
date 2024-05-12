// const digitList = (num) => {
//   let numbers = num.toString().split("");
//   let finalArray = [];
//   for (let i = 0; i < numbers.length; i++) {
//     finalArray.push(parseInt(numbers[i], 10));
//   }
//   return finalArray;
// };

const digitList = (num) => {
  let numbers = num.toString().split("");
  const finalArray = numbers.map((number) => parseInt(number, 10));
  return finalArray;
};

console.log(digitList(12345));
console.log(digitList(7));
console.log(digitList(375290));
console.log(digitList(444));
