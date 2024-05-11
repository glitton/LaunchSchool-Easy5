function union(arr1, arr2) {
  const newArray = arr1.concat(arr2);
  let finalArray = newArray.filter(
    (item, index) => newArray.indexOf(item) === index
  );
  return finalArray;
}

// console.log(union([1, 3, 5], [3, 6, 9]));
console.log(union([2, 2, 6], [4, 5, 5, 6]));
