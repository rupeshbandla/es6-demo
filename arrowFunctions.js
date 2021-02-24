var a = function () {
  console.log("before es6");
};

a();

//es6 arrow fn
// var a1 = () =>{
//     console.log("es6 arrow fn");
// }
// a1();

var abc = () => "es6 returning"; //for one line no need to add {}

abc();

var addition = (a, b) => a + b;
console.log(addition(4, 3));

var printmessage = (message) => "welcome" + message; //for single parameter no need to add ()
console.log(printmessage("to js world"));
