// problem-1: Create An Array Of Objects, Each Representing A Person With Properties Like Name, Age, And Gender. Write A Function To Filter Out All Females And Then Map The Remaining People To An Array Of Names. Print The Final Result.

function getMaleNames(people) {
  return people
    .filter((person) => person.gender === "male")
    .map((person) => person.name);
}

// test problem-1
// console.log(
//   getMaleNames([
//     { name: "Alice", age: 25, gender: "female" },
//     { name: "Bob", age: 30, gender: "male" },
//     { name: "Eve", age: 22, gender: "female" },
//     { name: "Frank", age: 40, gender: "male" },
//   ])
// );

// Problem-2: Create An Array Of Objects Representing Books With Properties Like Title, Author, And Year. Write A Function That Takes The Array And Returns A New Array With Only The Book Titles. Print The Result.

function getBookTitles(books) {
  return books.map((book) => book.title);
}

// test problem-2
// console.log(
//   getBookTitles([
//     { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
//     { title: "1984-Story", author: "George Orwell", year: 1949 },
//     { title: "Moby-Dick", author: "Herman Melville", year: 1851 },
//   ])
// );

// Problem-3: Write Three Functions: One To Square A Number, One To Double A Number, And One To Add 5 To A Number. Compose These Functions To Create A New Function That Squares A Number, Doubles The Result, And Then Adds 5.

// Function to square a number
function square(num) {
  return num * num;
}

// Function to double a number
function double(num) {
  return num * 2;
}

// Function to add 5 to a number
function addFive(num) {
  return num + 5;
}

// Function to compose the three functions
function composeFunctions(num) {
  const squared = square(num);
  const doubled = double(squared);
  return addFive(doubled);
}

// test: problem-3
// console.log(composeFunctions(3));

// Problem-4: Create An Array Of Objects Representing Cars With Properties Like Make, Model, And Year. Write A Function To Sort The Array Of Cars By The Year Of Manufacture In Ascending Order. Print The Sorted Array.

function sortCarsByManufactureYear(cars) {
  return cars.sort((a, b) => a.year - b.year);
}

// test: problem-4
// console.log(
//   sortCarsByManufactureYear([
//     { make: "Toyota", model: "Corolla", year: 2010 },
//     { make: "Honda", model: "Civic", year: 2015 },
//     { make: "Ford", model: "Mustang", year: 2005 },
//   ])
// );

// Problem-5: Write A Function That Searches An Array Of Objects For A Specific Person By Name. If Found, Modify Their Age Property. Print The Updated Array.

function updatePersonAge(people, name, newAge) {
  const person = people.find((person) => person.name === name);
  if (person) {
    person.age = newAge;
  }
  return people;
}

// Test Problem-5:
// console.log(
//   updatePersonAge(
//     [
//       { name: "Alice", age: 25, gender: "female" },
//       { name: "Bob", age: 30, gender: "male" },
//       { name: "Charlie", age: 30, gender: "male" },
//     ],
//     "Charlie",
//     36
//   )
// );
