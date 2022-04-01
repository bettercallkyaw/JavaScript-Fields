console.log('Hello World');
console.log(123);
console.log(true);
console.log([1,2,3,4]);
console.log({a:1},{b:55});
console.table({a:1},{b:55});
console.table({fullName:'bob smith'},{age:44});
console.error('This is some error!');
console.clear();
console.warn('This is warn!');

console.time('Hello');
console.log('Hello World');
console.log('Hello World');
console.log('Hello World');
console.log('Hello World');
console.log('Hello World');
console.timeEnd('Hello');

/**
 * Primitive Data Types Vs.Reference Types
 * Primitive Data Types
 * - stored directly in the location the variable accesses
 * - stored on the stack
 * 
 * #Six types of primitive data types
 * 1.string
 * 2.bool
 * 3.int
 * 4.float
 * 5.undefined
 * 6.symbols(ES6)
 * 
 * 
 * Reference Types
 * - Accessed by reference
 * - Objects that are stored on the heap
 * - A pointer to a location in memory
 * 
 * Reference Data Types
 * 1.Arrays
 * 2.Objects Literals
 * 3.Functions
 * 4.Dates
 * 5.Anything Else
 */

var authorName='bob smith';
//authorName='william smith';
var age=34;
console.log('Hello My name is '+authorName+'.I am '+age+' year old.');

//Data Types
var firstName='Ali'; //string
var isMarried=true; //boolean
var price=45;  //integer
var quantity=4.5; //float
var job; //undefined

console.log(firstName);
console.log(isMarried);
console.log(price);
console.log(quantity);
console.log(job);

//null
var car=null;
console.log(typeof car);

//symbol
var sym=Symbol();
console.log(typeof sym);

//date and time
var today=new Date();
console.log(typeof today);
console.log(today);

var val;

//number to string
val=String(5);
val=String(4+5)

//boolean to string
val=String(true);

//date to string
val=String(new Date());

//array to string
val=String(['bob',23,'web developer']);

//to string
val=(5).toString();
val=(true).toString();

//string to number
val=Number('5');
val=Number(true);
val=Number(false);
val=Number(null);
val=Number('Hello World');
val=Number(['bob',34]);

val=parseInt('33.33');
val=parseFloat('32.455');
console.log(val);
console.log(val.toFixed(2));

var num1=String(4);
var num2=4;

//var total=num1+num2;
var total=Number(num1)+num2;
console.log(total);