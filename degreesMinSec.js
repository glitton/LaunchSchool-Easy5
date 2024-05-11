function dms(degreesFloat) {
  const DEGREE = "\u00B0";
  const MINUTES_PER_DEGREE = 60;
  const SECONDS_PER_MINUTE = 60;
  //Remove decimal from degrees
  let degreesInt = Math.floor(degreesFloat);
  let minutes = ((degreesFloat - degreesInt) * MINUTES_PER_DEGREE).toFixed(2);
  let seconds = ((minutes - Math.floor(minutes)) * SECONDS_PER_MINUTE).toFixed(
    2
  );

  minutes = Math.floor(minutes);
  seconds = Math.floor(seconds);

  return `${degreesInt}${DEGREE}${padZeroes(minutes)}'${padZeroes(seconds)}"`;
}

console.log(dms(360));
console.log(dms(76.73));
console.log(dms(93.034773));

function padZeroes(number) {
  let numString = String(number);
  return numString.length < 2 ? "0" + numString : numString;
}

// console.log(padZeroes(360));
