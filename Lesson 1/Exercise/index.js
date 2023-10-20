// Exercise 1.1
console.log("Mohamed Jawad")


// Exercise 2
let city = "Tokyo"
console.log(city)

let firstName = "Mohamed"
let lastName = "Jawad"
let fullName = firstName + " " + lastName;

console.log(fullName)


// Exercise 3
let colors = ["burgundy", "Navy blue", "Beige", "Nude", "Black"]
console.log(colors[2])

colors.push("Lime")

console.log(colors)

console.log(colors.length)


// Exercise 4
const book = {
    title: "Meditations",
    author: "Marcus Aurelius",
    yearPublished: "AD 167",
}

book.edition = "Paperback"
console.log(book.edition)

console.log("My favorite book is " + book.title + " by " + book.author + " published in " + book.yearPublished);


// Exercise 5
function greet(input) {
    console.log("Hello " + input);
}

greet("Mohamed");

function add(input1, input2) {
    console.log(input1 + input2);
}

add(5,7)

function describeBook({title, author, yearPublished}) {
    console.log("The book " + title + " was written by " + author + " in " + yearPublished)
}

describeBook(book)

// Bonus Challenge
function getOldestStudent() {
    const students = [
        { name: "Mary Potts", age: 18, gradeLevel: 12 },
        { name: "John Doe", age: 17, gradeLevel: 11 },
        { name: "Andrew Schwartz", age: 19, gradeLevel: 12}
    ]

    const oldestStudent = students.reduce((acc, student) => {
        return student.age > acc.age ? student : acc;
      }, { age: -Infinity });
    
      const totalAge = students.reduce((acc, student) => acc + student.age, 0);
      const averageAge = totalAge / students.length;
    
      return { oldestStudent, averageAge };
    }
    
    const { oldestStudent, averageAge } = getOldestStudent();
    
    console.log(`Oldest student: ${oldestStudent.name}`);
    console.log(`Average age: ${averageAge}`);


    