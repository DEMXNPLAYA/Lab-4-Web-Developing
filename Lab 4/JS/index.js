///////////////////////////////////////////////////////////////////////////////////////////
console.log("-------------------Задвання 1---------------------");

let fruitArray = ['apple', 'banana', 'orange', "pomegranate", "grape", "mango"];
console.log("Первинний масив: " + fruitArray);
function fruitsArray(someArray) {
    someArray.pop();
    someArray.unshift("pineapple");
    someArray.sort().reverse(); 
    console.log(someArray);
    console.log(someArray.indexOf("apple"));
    
}
fruitsArray(fruitArray);

//////////////////////////////////////////////////////////////////////////////////////////
console.log("-------------------Задвання 2---------------------");

let colours = ["red", "blue", "pink", "yellow", "black", "white", "dark-blue", "light-red"];
console.log("Первинний масивчик: " + colours);
function workWithColours(justArray){    
    console.log("Найдовший елемент в масиві: " + justArray.reduce((a,b) => a.length > b.length ? a : b));
    console.log("Найкоротший елемент в масиві: " + justArray.reduce((a,b) => a.length < b.length ? a : b));
    console.log("Відфільтрований масив: " + justArray.filter(color => color.includes("blue")));
    console.log("Рядок після застосування методу join(): " + justArray.join(","));
}
console.log(workWithColours(colours));

/////////////////////////////////////////////////////////////////////////////////////////
console.log("-------------------Задвання 3---------------------");

let workWithEmployees = (someEmployeeArray) => {
    console.log("Відсортований масив: ");
    function sortingByName(a,b){
        return a.name.localeCompare(b.name);
    }
    console.log(someEmployeeArray.sort(sortingByName));
    console.log("Працівники із посадою 'Developer': ");
    console.log(someEmployeeArray.filter(employee => employee.position === "Developer"));
    console.log("Працівники яким менше 30 років: ");
    console.log(someEmployeeArray.filter(employee => employee.age < 30));
    console.log("Масив із новим працівником: ");
    let newEmployee = {name: "Artem", age: 22, position: "TeamLead"};
    someEmployeeArray.push(newEmployee);
    console.log(someEmployeeArray);
}
let employeesArray = [
    { name: "Maks", age: 27, position: "Developer"},
    { name: "toha", age: 21, position: "UX/UI Designer"},
    { name: "Vasyl", age: 30, position: "Developer"},
];
let employeesArrayCopy = employeesArray.slice();
console.log("Первинний масив: ");
console.log(employeesArrayCopy);
workWithEmployees(employeesArray);

/////////////////////////////////////////////////////////////////////////////////////////
console.log("-------------------Задвання 4---------------------");

function workWithStudents(studentsArray){
    console.log("Масив без Олексія: ");
    console.log(studentsArray.filter(student => student.name !== "Олексій"));
    console.log("Масив із новим студентом: ");
    let newStudent = {name: "Даша", age: 21, course: 3};
    studentsArray.push(newStudent);
    console.log(studentsArray);
    console.log("Відсортований масив по роках: ");
    console.log(studentsArray.sort((a,b) => a.age > b.age ? 1 : -1));
    console.log("Студенти, які навчаються на 3-му курсі: ");
    console.log(studentsArray.filter(student => student.course === 3));
}

let students = [
    {name: "Артем", age: 18, course: 1},
    {name: "Софія", age: 19, course: 2},
    {name: "Олексій", age: 19, course: 2},
    {name: "Саша", age: 20, course: 3},
];

let studentsCopy = students.filter(student => student.name !== "Олексій");

console.log("Первинний масив: ");
console.log(students);

workWithStudents(studentsCopy);

/////////////////////////////////////////////////////////////////////////////////////////
console.log("-------------------Задвання 5---------------------");

function workWithNumbers(numberArray){
    let secondNumbArray = [4,9,10];
    console.log("Масив після піднесення до квадрату: " + numberArray.map(value => value **2));
    console.log("Парні числа масиву: " + numberArray.filter(value => value % 2 == 0 ));
    console.log("Сума всіх елементів масиву: " + numberArray.reduce((acc,curr) => acc + curr));
    console.log("Об'єднання двох масивів: " + numberArray.concat(secondNumbArray));
    console.log("Масив після видалення 3 перших елементів: " + numberArray.slice(0,3));
}

let numbers = [1,3,6,3,8,2];
console.log("Первинний масив: " + numbers);
workWithNumbers(numbers);

/////////////////////////////////////////////////////////////////////////////////////////
console.log("-------------------Задвання 6---------------------");

function libraryManagement(){

    let books = [
        {title: "Red Dragon", author: "Thomas Harris", genre: "Crime, horror, thriller, psychological horror", pages: 348, isAvailable: true},
        {title: "The Silence of the Lambs", author: "Thomas Harris", genre: "Psychological horror, thriller, mystery", pages: 338, isAvailable: true},
        {title: "Carrie", author: "	Stephen King", genre: "Horror", pages: 199, isAvailable: true},
        {title: "Tomie", author: "Junji Ito", genre: "Horror, psychological horror", pages: 105, isAvailable: true},
        {title: "Green Mile", author: "Stephen King", genre: "Dark fantasy, Southern Gothic, magic realism", pages: 421, isAvailable: true},
    ];
    
    function addBook(title, author, genre, pages) {
        let newBook = {
            title: title,
            author: author,
            genre: genre,
            pages: pages,
            isAvailable: true
        };
        books.push(newBook);
    }
    function removeBook(title) {
        books = books.filter(book => book.title !== title);
    }

    function findBooksByAuthor(author) {
        return books.filter(book => book.author === author);
    }

    function toggleBookAvailability(title, isBorrowed) {
        let book = books.find(book => book.title === title);
        if (book) {
            book.isAvailable = !isBorrowed;
        }
    }

    function sortBooksByPages() {
        books.sort((a, b) => a.pages - b.pages);
    }

    function getBooksStatistics() {
        let totalBooks = books.length;
        let availableBooks = books.filter(book => book.isAvailable).length;
        let borrowedBooks = totalBooks - availableBooks;
        let averagePages = totalBooks > 0 ? books.reduce((acc, book) => acc + book.pages, 0) / totalBooks : 0;

        return {
            totalBooks: totalBooks,
            availableBooks: availableBooks,
            borrowedBooks: borrowedBooks,
            averagePages: averagePages
        };
    }

    function allBooks(){
        return books;
    }

    return {
        addBook,
        removeBook,
        findBooksByAuthor,
        toggleBookAvailability,
        sortBooksByPages,
        getBooksStatistics,
        allBooks
    };

}

let library = libraryManagement();
library.addBook("Soosds", "sdsdsd", "sdswewew", 12, true);
library.removeBook("Soosds");
console.log("Author");
console.log(library.findBooksByAuthor("Stephen King"));
library.sortBooksByPages();
console.log(library.allBooks());


/////////////////////////////////////////////////////////////////////////////////////////
console.log("-------------------Задвання 7---------------------");

function workWithStudentObject(someStudentObj){
    someStudentObj.subjectArray = ["English", "Math", "Philosophy"];
    delete someStudentObj.age;
    console.log("Об'єкт після обробки: ");
    console.log(someStudentObj);
}
let objStudents = { name: "Maks", age: 19, course: 2 };
workWithStudentObject(objStudents);