
// Set default value using || Operator

var fullName = function (firstName, lastName) {
    var firstName = firstName || 'john';
    var lastName = lastName || 'smith';
    console.log(firstName + ' ' +lastName);
}

fullName('rahul', 'hirve');

fullName();