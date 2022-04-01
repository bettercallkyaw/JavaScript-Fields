//Array
var fruits=['apple','banana','orange'];
var numbers=Array(45,67,89);

console.log(typeof fruits);
console.log(typeof numbers);
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(numbers[1]);

//add some index array
fruits[0]='redbarry';
fruits[6]='greenbarry';
console.log(fruits);

//array push
fruits.push('mango');
console.log(fruits);

//array pop
fruits.pop('mango');
console.log(fruits);

//array unshift
fruits.unshift('mango');
console.log(fruits);

//array shift
fruits.shift('mango');
console.log(fruits);

//array spred operators
var nums=[1,2,3,4,5];
var alphas=['a','b','c','d','e'];
var results=[...nums,...alphas];
console.log(results);

//array object
var person={
    authorName:'john doe',
    email:'john@info.com',
    age:34,
    hobbies:['books_collection','hiking','paint'],
    address:{
        street:'DA 45'
    }
};

for(p in person){
    console.log(p+' is '+person[p]);
}

//array object constructor
var user=new Array('bob','bob@text.com',44);
console.log(user);

//for map array
var addNums=[1,2,3,4,5,6];
var value=addNums.map((n)=>{
    return n+1;
});
console.log(value);

//for filter array
var devNums=[1,2,3,4,5,6];
var output=devNums.filter((n)=>{
    //return n%2;
    return !(n%2);
});
console.log(output);

//for reduce array
var totalNums=[1,2,5];
var sum=totalNums.reduce((a,n)=>{
    return a+n;
});
console.log(sum);