const user={
    fullName:'ali smith',
    age:34,
    hobbies:['sports','movies','paint']
};

console.log(typeof user);
for(p in user){
    console.log(`${p} is ${user[p]}`);
}

const fruits=['apple','banana','orange'];
const numbers=Array(45,56,78);

console.log(fruits[2]);
console.log(numbers[0]);

//add some array
fruits[5]='mango';
console.log(fruits);

//array push
fruits.push('greenbarry');
console.log(fruits);

//array pop
fruits.pop('greenbarry');
console.log(fruits);

//array unshift
fruits.unshift('bluebarry');
console.log(fruits);

//array shift
fruits.shift('bluebarry');
console.log(fruits);

const people=[
    {
        'name':'bob smith'
    },
    {
        'name':'ali','gender':'M'
    },
    {
        'name':'taylar','gender':'F'
    },
    {
        'name':'william','gender':'m'
    },
    {
        'name':'kati','gender':'f'
    }
];

// let result=people.map((person)=>{
//     if(person.gender){
//         if(person.gender==='m'||person.gender==='M'){
//             person.gender='Male';
//         }
//         if(person.gender==='f'||person.gender==='F'){
//             person.gender='Female';
//         }
//     }else{
//         person.gender='Unknown';
//     }
//     return person;
// });

// console.log(result);

// let result=people.map((person)=>{
//     if(person.gender==='m'||person.gender==='M'){
//         person.gender='Male';
//     }else if(person.gender==='f'||person.gender==='F'){
//         person.gender='Female';
//     }else{
//         person.gender='Unknown';
//     }
//     return person;
// });

// console.log(result);

let result=people.map((person)=>{
    switch (person.gender) {
        case 'm':
        case 'M':
            person.gender='Male';    
            break;
        case 'f':
        case 'M':
            person.gender='Female';
            break;    
        default:
            person.gender='Unknown';
    }
    return person;
});

console.log(result);

let memberJson='{"name":"jack","age":33}'
let member=JSON.parse(memberJson);
console.log(member);