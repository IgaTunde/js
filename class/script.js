"use strict";
//CLASSES

class Person {
  constructor(userId, firstName, lastName, birthYear) {
    this.userId = userId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
  }

  // Calculate Age
  calculateAge() {
    return new Date().getFullYear() - this.birthYear;
  }

  // Get Full name
  getFullName() {
    return this.firstName + " " + this.lastName;
  }

  // Get User ID
  getUserId() {
    return this.userId;
  }
}

let personBio = new Person(1, "Tunde", "Iga", 1995);

//age
let birthYear = personBio.calculateAge();
console.log(birthYear);

//full name
let fullName = personBio.getFullName();
console.log(fullName);

//userId
let userId = personBio.getUserId();
console.log(userId);


// const bigDay = new Date(2019, 6, 19);
// console.log(bigDay.toLocaleDateString());

// if (bigDay.getTime() < Date.now()) {
//   console.log("once upon a time");
// }

// function MyClass() {
//   this.myField = "foo";
// }
// const myInstance = new MyClass();
// console.log(myInstance.myField)

//

// class Person {
//   constructor() {
//     this.userId = 1;
//     this.firstName = "Tunde";
//     this.lastName = "Iga";
//     this.birthYear = 1995;
//   }

//   //Calculate Age
//   calculateAge() {
//     return new Date().getFullYear() - this.birthYear;
//   }

//   //Get Full name
//   getFullName() {
//     return this.firstName + " " + this.lastName;
//   }

//   //user id
//   getUserId() {
//     return this.userId;
//   }
// }

// let age;
// age = new Person();
// age = age.calculateAge();
// console.log(age);
// // let age = birthYear.calculateAge(1995);
// // console.log(age)

// let fullName;
// fullName = new Person();
// fullName = fullName.getFullName();
// console.log(fullName);

// const userId = new Person();
// console.log(userId.getUserId())
