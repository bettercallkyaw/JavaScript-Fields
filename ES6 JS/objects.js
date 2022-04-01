//object properties
const person={
    fullName:'bob smith',
    email:'bob@gmail.com',
    city:'boston',
    yearNow:2022,
    birthYear:1999,
    hobbies:['books_collection','paint','hiking'],
    links:[
        {
            twitter:'www.twitter.com/@bob345'
        },
        {
            website:'www.bob.info'
        }
    ],
    address:{
        street:'DA 45'
    },
    calcAge:function(){
        return this.yearNow-this.birthYear;
    }
};

console.log(person.fullName);
console.log(person.hobbies[0]);
console.log(person.links[1]);
console.log(person.address);
console.log(person.address.street);
console.log(person.calcAge());

const {fullName,address:{street}}=person;
console.log(person);
console.log(street);

person.family=['jack','peter'];
console.log(person.family);

const todos=[
    {
        id:1,
        text:'walking with boot',
        isCompleted:true
    },
    {
        id:2,
        text:'talking with boss',
        isCompleted:false
    },
    {
        id:3,
        text:'let finsh movies',
        isCompleted:true
    },
];

console.log(todos[0].text);

for(let i=0;i<todos.length;i++){
    console.log(todos[i].isCompleted);
}

for(let todo of todos){
    console.log(todo.id);
}

const todoJson=JSON.stringify(todos);
console.log(todoJson);

//forEach
todos.forEach((todo)=>{
    console.log(todo.text);
});

//for map
const todoText=todos.map((todo)=>{
    return todo.text;
});
console.log(todoText);

//for filter
const todoCompleted=todos.filter((todo)=>{
    return todo.isCompleted==true;
}).map((todo)=>{
    return todo.text;
});
console.log(todoCompleted);