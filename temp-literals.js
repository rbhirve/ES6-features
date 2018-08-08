// Templete Literals in ES6

var firstName = 'John';
var lastName = 'Smith';

// ES5 way to write string
var fullName1 = 'My full name is ' + firstName +' ' + lastName;
console.log(fullName1);


// ES6 way to write string
var fullName2 = `My full name is ${firstName} ${lastName}`;
console.log(fullName2);
