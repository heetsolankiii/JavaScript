// Array Sorting
const numericArray = [5, 1, 3, 10, 2];

document.getElementById("originalArray").textContent += " " + numericArray.join(", ");

function sortAlphabetically() {
    const sortedAlphabetically = numericArray.slice().sort();

    document.getElementById("sortedArray").textContent = "Sorted Alphabetically: " + sortedAlphabetically.join(", ");
}

function sortNumerically() {
    const sortedNumerically = numericArray.slice().sort((a, b) => a - b);

    document.getElementById("sortedArray").textContent = "Sorted Numerically: " + sortedNumerically.join(", ");
}

// Boolean Value
function isMinor() {
    var age = document.getElementById("age").value;
    if(age < 18) {
        document.getElementById("minor").innerHTML="You are a minor.";
    }
    else {
        document.getElementById("minor").innerHTML="You are not a minor.";
    }
}

// Display Date
function displayDate() {
    const todayDate = new Date();
    const date = todayDate.getDate();
    let month = todayDate.getMonth() + 1;
    let year = todayDate.getFullYear();
    document.getElementById("dateTime").innerHTML=`Today's Date = ${date}/${month}/${year}`;
}

// Function Call
function myFunction() {
    let userInput = prompt("Enter a number to check whether it is even or not.");
    if(userInput % 2 == 0) {
        document.getElementById("myFunction").innerHTML= `The number ${userInput} is Even.`;
    }
    else {
        document.getElementById("myFunction").innerHTML= `The number ${userInput} is Odd.`;
    }
}

// Math Function
function mathFunctions() {
    const piValue = Math.PI;
    const squareRoot = Math.sqrt(4);
    const cubeRoot = Math.cbrt(64);
    const roundNum = Math.round(3.4567);
    const floorNum = Math.floor(9.4567);
    const ceilNum = Math.ceil(9.4567);
    const randomNumber = Math.floor(Math.random() * 100);
    document.getElementById("mathFunctions").innerHTML= `
    PI = ${piValue} 
    <br> Square root of 4 = ${squareRoot}
    <br> Cube root of 64 = ${cubeRoot} 
    <br> Round Number of 3.4567 = ${roundNum}
    <br> Floor Number of  9.4567 = ${floorNum}
    <br> Ceiling Number of 9.4567 = ${ceilNum}
    <br> Random Number between 0 to 100 = ${randomNumber}`;
}

// Objects
function objects() {
    const student = {
        name: "Heet Solanki",
        college: "SK Somaiya College",
        seatNo: 31011223068,
        rollNo: 68,
        degree: "BCA"
    };
    document.getElementById("objects").innerHTML=`
    Name: ${student.name}
    <br>
    College: ${student.college}
    <br>
    Seat No: ${student.seatNo}
    <br>
    Roll No: ${student.rollNo}
    <br>
    Degree: ${student.degree}
    `;
}

// String
function strings() {
    let userInput = prompt("Enter a string;");
    document.getElementById("strings").innerHTML = `
    Original String: "${userInput}"
    <br>
    String in Uppercase: "${userInput.toUpperCase()}"
    <br>
    String in Lowercase: "${userInput.toLowerCase()}"`;
}

// Regular Expression
function regularExpression() {
    const str = "The quick brown dog jumps over the lazy dog."
    let findDog = str.search(/dog/i);
    document.getElementById("regExpr").innerHTML=`The word dog has appeared: ${findDog}`;
}