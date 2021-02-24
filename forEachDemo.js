const arr = ["learning", "js", "along", "with", "es6"];

const array = [32,43,33,32,54]

arr.forEach(function (value, index) {
  console.log(value, index);
});

const resultArray = array.map(a=>a*2);
console.log(resultArray);