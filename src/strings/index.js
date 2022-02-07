const split = (str, delim) => {
  // write code for strings.split
  return  str.split(delim);
}

const pairs = (str) => {
  // write code for strings.pairs
  let pairsArr = [];
  for (let i=0; i < str.length; i+=2) {

    pairsArr.push(str[i].concat(str[i+1]));
  }
  return pairsArr;
}

console.log(pairs("stringify"));

const reverse = (str) => {
  // write code for strings.reverse
  let reverseString = str.split("").reverse().join("");
  return reverseString;
}

module.exports = {
  split,
  pairs,
  reverse
}