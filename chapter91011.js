//01 Karachi
var cityName = prompt("Put your city name here")
    if (cityName === "Karachi" )
        alert('Welcome to the city of lights (not anymore though)')
    if (cityName != "Karachi")
    alert('The city you entered not found')

//02 Gender prompt
var gender = prompt('Put your gender here')
if(gender === 'male')
alert('Good Morning Sir')

if(gender === 'female')
alert("Good Morning Ma'am")

if(gender != "male", "female")
alert("Kindly enter your gender")

//03 Signal lights input
var signalColor = prompt("Put singal light color here")
if(signalColor === "red")
alert('Must Stop')

if(signalColor === "yellow")
alert('Ready to move')

if(signalColor === "green")
alert('Move now')

//04 Fuel
var fuel = prompt('Put your car remaining fuel here')
if(fuel < 0.25) {
    alert('Please refill the fuel in your car');
}
if(fuel > .025) {
    alert('You are good to go!');
}

//05 script and check
//a
var a = 4;
if(++a === 5) {
    alert("given condition for variable a is true ");
}

//b
var b = 82;
if(b++ === 83) {
    alert("given condition for variable b is true");
}

//c
var c = 12;
if(c++ === 13) {
    alert("condition 1 is true")
}

var c = 13;
if(c === 13) {
    alert("condition 2 is true")
}

if(++c < 14) {
    alert("condirtion 3 is true")
}

if(c === 14) {
alert('condition 4 is true')
}

//d
var materialCost= 20000
var laborCost = 2000
var totalCost = materialCost + laborCost
if (totalCost === laborCost + materialCost) {
    alert('The cost is equal')
}

//e
if('true') {
    alert("True")
}

if('false') {
    alert("False")
}

//f
if("car" < "cat")
alert("car is smaller that cat")

//06
var totalMarks = prompt("Please input total marks")
if(totalMarks == 300) {
    document.write("TOTAL MARKS = " + totalMarks + "<br>")
}
else {
        alert("We know total marks are 300. Kindly input same")
}

var obtainedMarks = prompt("Please input obtained marks")
if(obtainedMarks <= 300) {
    document.write(`Obtained Marks = ${obtainedMarks} <br>`)
} else {
    alert("Kindly input correct value")
}

var percentage = obtainedMarks / totalMarks * 100
document.write("Percentage = " + percentage + "%" + "<br>")

if(percentage >= 80) {
    document.write("Grade : A-one " + "<br>")
    document.write("Remarks : Excellent")
} else if(percentage >= 70) {
    document.write("Grade : A " + "<br>")
    document.write("Remarks : Good")
} else if(percentage >= 60) {
    document.write("Grade : B " + "<br>")
    document.write("Remarks : You need to improve")
} else if(percentage <=59) {
    document.write("Grade : Fail" + "<br>")
    document.write("Remarks : Sorry try again")
}


// 007 Guess Game
let secNum = 5;
var userGuess = prompt("Guess the secret number")
if(secNum == userGuess) {
   alert("Bingo! Correct Answer")
 } else if (secNum == ++userGuess) {
     alert("Close enough  to the correct answer")
}


//08
var divisible = prompt("Please input any value")
if(divisible % 3 === 0) {
    alert("Yes! the value provided is divisible by 3.")
} else {
    alert ("Cannot divide the given value")
}

//09 check even or odd
let num = prompt("Input any value here")
if(num % 2 === 0) {
    alert ("Even number")
} else {
    alert("Odd number")
}

//10 Check Temperature
var temp = prompt("Input today temperature in your city")
if (temp >= 40) {
    alert("Its too hot outside.")
} else if (temp >= 30) {
    alert("The weather is Normal today")
} else if(temp >= 20) {
    alert("Today weather is cool.")
} else if(temp >= 10) {
    alert("OMG! Today's weather is so cool")
}

//11 Calculate value
var numb1 = prompt("input first number")
var operator = prompt("input operator sign +, -, *, /, & %")
var numb2 = prompt("input second number")
let result;
if (isNaN (numb1) || isNaN (numb2)) {
    result = "Input valid number or value"
} else {
    if(operator === "+") {
    result = +numb1 + +numb2;
} else if (operator === "-") {
    result = numb1 - numb2;
} else if (operator === "*") {
    result = numb1 * numb2;
} else if (operator === "/") {
    if (numb2 === 0) {
        alert("cannot divide the value by 0")
    } else {
    result = numb1 / numb2; }
} else if (operator === "%"){
    result = numb1 % numb2;
} else {result = "Invalid operators. Please enter valid sign of operator."}
}
alert("Result : " + result)