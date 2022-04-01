const people=[
    {
        fullName:'smith row',
        age:36
    },
    {
        fullName:'john doe',
        age:44
    },
    {
        fullName:'william smith',
        age:12
    }
];

const overedAgePeople=people.filter(person=>person.age>=18);
console.log(overedAgePeople);

const words=['hello','programming','code','limit','love'];
const bigWords=words.filter(word=>word.length>=5);
console.log(bigWords);