var fullName='john doe';
var age=23;
var isMarried=false;

//sample if/else
if(isMarried==false){
    console.log(fullName+' is a single.');
}else{
    console.log(fullName+' is a married.');
}

//if/else if/else
if(age<13){
    console.log(fullName+' is a child.');
}else if(age>=13 && age<=20){
    console.log(fullName+' is a teenager.');
}else{
    console.log(fullName+' is a young man.');
}

//ternary operator
age>=18?console.log(fullName+' drinks beer.'):console.log(fullName+' drinks juice.');

//switch statement
var job='teacher';
switch (job) {
    case 'teacher':
        console.log(fullName+' is a teacher.');
        break;
    case 'driver':
        console.log(fullName+' is a driver.');
        break;
    default:
        console.log(fullName+' is a someone.');
}