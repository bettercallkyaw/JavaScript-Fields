//object and properties
var user={
    fullName:'john doe',
    email:'john@info.com',
    job:'teacher',
    city:'boston',
    hobbies:['hiking','books_collection','paint'],
    yearNow:2022,
    birthYear:1999,
    socialLinks:[
        {
            facebook:'www.facebook.com/profile.php?id=47555856746464'
        },
        {
            website:'www.john.com/info'
        }
    ],
    address:{
        street:'BA 34'
    },
    calcAge:function(){
        return this.yearNow-this.birthYear;
    }
};

console.log(user);
console.log(user.fullName);
console.log(user.hobbies[1]);
console.log(user.socialLinks[1]);
console.log(user.address);
console.log(user.address.street);

var {fullName,address:{street}}=user;
console.log(fullName);
console.log(street);

user.phone=['huawei','apple','oppo'];
console.log(user.phone);