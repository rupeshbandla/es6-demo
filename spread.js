// var arr1 = ["this","is"];
// var arr2 = ["react","demo"];

// // var arr3 = arr1.concat(arr2);
// // console.log(arr3);

// var mergeArray = [...arr1,...arr2]//spred op in es6
// console.log(mergeArray);
// console.log(arr1);

var employees = [
  {
    id: 1,
    mame: "rupesh",
  },
  {
    id: 2,
    mame: "ramesh",
  },
];

var employee = {
  id: 3,
  name: "rajesh",
};

// employees.push(employee);//altered original array
console.log(employees);

var newEmployeeArray = [...employees, employee]; //it will creates new array with updated values it will not alters original array
console.log(newEmployeeArray);
