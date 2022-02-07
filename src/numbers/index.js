const isEven = (num) => {
  // write code for numbers.isEven
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

const sum = (arr) => {
  // write code for numbers.sum
  let total = 0;
  for (let i=0; i<arr.length; i++) {
    total = total + arr[i];
  }
  return total;
}

const comboSum = (arr, sum) => {
  // write code for numbers.comboSum
  let total = 0;
  for (let i=0; i<arr.length; i++) {
    total = total + arr[i];
  }
  if (total === sum) {
    return true;
  } else {
    return false;
  }
}

module.exports = {
  isEven,
  sum,
  comboSum
}