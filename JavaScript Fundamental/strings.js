var fullName='john smith';
var job='web designer';
var age=33;

console.log(fullName+' is a '+job+'.His age is '+age+' year old.');

//Append
var val;

val='bob';
val +=' smith';

//escaping
val='This\'s awesome!I can\'t wait!';

//length
val=fullName.length;

//concat
val=fullName.concat(' ',job);

//indexof
val=fullName.indexOf('t');
val=fullName.lastIndexOf('h');

//charAt
val=fullName.charAt('2');

//get last char
val=fullName.charAt(fullName.length-1);

//includes
val=fullName.includes('john');
console.log(val);