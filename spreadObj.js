var studentObject = {rollno:21,name:"rupesh"};
// var copiedObject = Object.assign({},studentObject);
// console.log(copiedObject);

// var spreadObject = {...studentObject};//within the {} need to use spread operator
// console.log(spreadObject);

var spreadObject = {...studentObject,age:25};//appending extra attributes to an object
console.log(spreadObject);