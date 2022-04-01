//sample function
var name;
function sayHello(name){
    console.log('Hello '+name);
}

sayHello('bob');
sayHello('john');

function calculageAge(birthYear){
    return 2022-birthYear;
}

var age=calculageAge(1999);
console.log(age);

//function expression
var WhatDoYouDo=function(firstName,job){
    switch (job) {
        case 'teacher':
            return firstName+' is a teacher.';
            break;
        case 'driver':
            return firstName+' is a driver.';
            break;
        default:
            return firstName+' is a something.'
    }
}

console.log(WhatDoYouDo('william','teacher'));

//function scope
var text='hello world';
function fakerText(){
    text='goodbye world';
    console.log(text);
}

fakerText();

//IIFE-Immediately Invoked Function Expression
(function(){
    console.log('hello world');
})();

//callback function
function twice(num,fun){
    let result=fun(num);
    return result*2;
}

var value=twice(5,function(x){
    return x+1;
});
console.log(value);

//rest parameter
function add(a,b,...c){
    console.log(c);
}

add(1,2,3,4,5);