var date = ["2021", "02", "16"];

// var year = date[0];
// var month = date[1];
// var date = date[2];
// console.log(year,month,date);

//es6
// var [year1,month1,date1] = date;
// console.log(month1);

// var [year2,,date2] = date;//skipping the value
// console.log(year2,date2);

var arr = [10, 20, [30, 40], 50];

var [a, b, [c, d], e] = arr;
console.log(arr);
console.log(a);
console.log(c);
