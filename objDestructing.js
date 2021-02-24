// var student ={
//     id:1,
//     name:"rupesh",
//     age:25
// }

// var id = student.id;
// var name = student.name;
// var age = student.age;
// console.log(id,name,age);//before es6

// var {id,name,age} = student;//es6 obj destructuring
// console.log('es6',id,name,age);

// var {id:Id,age:Age} = student;//to alter the key
// console.log(Age);

var student1 = {
  id: 1,
  age: 25,
  name: {
    firstname: "rupesh",
    lastname: "bandla",
  },
};

var {
  id,
  age,
  name: { firstname, lastname },
} = student1;
console.log(`${firstname},${age}`);
