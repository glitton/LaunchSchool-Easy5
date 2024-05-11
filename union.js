function union(arr1, arr2) {
  const newArray = arr1.concat(arr2);
  // console.log(newArray);
  let finalArray = newArray.filter(
    (item, index) => newArray.indexOf(index) === index
  );

  console.log(finalArray);
}

union([1, 3, 5], [3, 6, 9]);
