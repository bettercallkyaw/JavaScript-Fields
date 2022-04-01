//create class
class Person{
    constructor(firstName,lastName,email,city,dob){
        this.firstName=firstName;
        this.lastName=lastName;
        this.email=email;
        this.city=city;
        //this.dob=dob;
        this.dob=new Date(dob);
    }

    getBirthYear(){
        return this.dob.getFullYear();
    }

    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}

//init object
person1=new Person('bob','smith','bob@gmail.com','boston','2-12-1999');
person2=new Person('john','doe','john@gmail.com','london','1-1-2000');

console.log(person1.getBirthYear());
console.log(person2.getBirthYear());

console.log(person1.getFullName());
console.log(person2.getFullName());