var yearJohn,yearMark,year;
var now=2022;
var ageJohn=23;
var ageMark=22;

//math operators
yearJohn=now-23;
yearMark=now-22;
console.log(yearJohn);
console.log(yearMark);

//logical operators
johnOlder=ageJohn>ageMark;
console.log(johnOlder);

//typeof operators
console.log(typeof johnOlder);

//operator precedence
var year=2022;
var peterBirthYear=1994;
var fullAge=28;

var isFullAge=year-peterBirthYear>=fullAge;
console.log(isFullAge);

//multiple assignments
var x,y;
x=y=(44+6)-3*2;
console.log(x);

x+=2;
console.log(x);

x-=2;
console.log(x);

x/=2;
console.log(x);

x*=2;
console.log(x);

x%=2;
console.log(x);

x++;
console.log(x);

++x;
console.log(x);

x--;
console.log(x);

--x;
console.log(x);

var num1=100;
var num2=50;
let val;

//simple math with numbers
val=num1+num2;
val=num1-num2;
val=num1*num2;
val=num1/num2;
val=num1%num2;

//Math Object
val = Math.PI;
val = Math.E;
val = Math.round(2.4);
val = Math.ceil(2.4);
val = Math.floor(2.8);
val = Math.sqrt(64);
val = Math.abs(-3);
val = Math.pow(8, 2);
val = Math.min(2, 3, 4, 23, 45, 67, 876);
val = Math.max(2, 3, 4, 23, 45, 67, 876);
val = Math.random();
val =Math.floor(Math.random() * 20+1);

console.log(val);

