const people=[
    {
        fullName:'john smith',
        email:'john@yahoo.com',
        isMarried:true,
        age:34
    },
    {
        fullName:'smith row',
        email:'smith455@yahoo.com',
        isMarried:false,
        age:24
    },
    {
        fullName:'ali kati',
        email:'ali345@outlook.com',
        isMarried:true,
        age:18
    },
];

const sortedByAge=people.sort((a,b)=>(a.age-b.age));
console.log(sortedByAge);