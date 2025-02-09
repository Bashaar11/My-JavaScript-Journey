////////////// Arrays //////////////

var student1 = "Ammar"
var student2 = "Bashaar"
var student3 = "Bilal"
var student4 = "Ali"

// Making variables is difficult then using array

let students = ["Ammar", "Bashaar", "Bilal", "Ali"]

////////////// Accessing elements in an array //////////////

console.log(students[4])

////////////// Adding and removing elements in an array //////////////

// Adding elements to an array

// unshift() adds an element at the beginning of the array
// push() adds an element at the end of the array

students.unshift("Ahmed")
students.push("Abdullah")

console.log(students)

// Removing elements to an array

// shift() removes an element at the beginning of the array
// pop() removes an element at the end of the array

students.shift()
students.pop()

console.log(students)

////////////// Removing, inserting, and extracting elements in an array //////////////

// splice() removes, inserts, or extracts elements in an array
// slice() extracts a subset of elements from an array


///// Slice method

// students.slice(1, 3) 1 is the starting index and also included and 3 is the ending index and not included

let newArray = students.slice(1, 3)

console.log(newArray)