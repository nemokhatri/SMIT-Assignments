//Chapter 06
//01 Arithmetic
var a = prompt("Please enter a value of a")

document.write("Result: <br>")
document.write("The value of a is: " + a + "<br>")
document.write("<br>")

document.write("The vlaue of ++a is: " + ++a + "<br>")
document.write("Now the value of a is: " + a + "<br>")
document.write("<br>")

document.write("The value of a++ is: " + a++ + "<br>")
document.write("Now the value of a is: " + a + "<br>")
document.write("<br>")

document.write("The value of --a is: " + --a + "<br>")
document.write("Now the value of a is: " + a + "<br>")
document.write("<br>")

document.write("The value of a-- is: " + a-- + "<br>")
document.write("Now the value of a is: " + a + "<br>")
document.write("<br>")

document.write("<br>")

//02
var a = 2, b = 1;
var result = --a - --b + ++b + b--;

document.write("--a; " + --a + "<br>" + "<br>")
document.write("--a - --b; " + (--a - --b) + "<br>" + "<br>")
document.write("--a - --b + ++b; " + (--a - --b + ++b) + "<br>" + "<br>")
document.write("--a - --b + ++b + b--; " + (--a - --b + ++b + b--) + "<br>" + "<br>")

document.write("a is " + a + "<br>" + "<br>")
document.write("b is " + b + "<br>" + "<br>")
document.write("result is " + result + "<br>" + "<br>")

//03 take user input and greet
var name = prompt("Please enter your name to greet with me")
alert("Hi " + name + ", Thanks for visiting, have a good day")


//04
//05 Table
var tableOf = prompt("Please enter a table number you want to learn.")
if(tableOf) {
document.write(tableOf + " x 1 = " + (tableOf * 1) + "<br>" )
document.write(tableOf + " x 2 = " + (tableOf * 2) + "<br>" )
document.write(tableOf + " x 3 = " + (tableOf * 3) + "<br>" )
document.write(tableOf + " x 4 = " + (tableOf * 4) + "<br>" )
document.write(tableOf + " x 5 = " + (tableOf * 5) + "<br>" )
document.write(tableOf + " x 6 = " + (tableOf * 6) + "<br>" )
document.write(tableOf + " x 7 = " + (tableOf * 7) + "<br>" )
document.write(tableOf + " x 8 = " + (tableOf * 8) + "<br>" )
document.write(tableOf + " x 9 = " + (tableOf * 9) + "<br>" )
document.write(tableOf + " x 10 = " + (tableOf * 10) + "<br>" )
} else {
document.write(5 + " x 1 = " + (5 * 1) + "<br>" )
    document.write(5 + " x 2 = " + (5 * 2) + "<br>" )
    document.write(5 + " x 3 = " + (5 * 3) + "<br>" )
    document.write(5 + " x 4 = " + (5 * 4) + "<br>" )
    document.write(5 + " x 5 = " + (5 * 5) + "<br>" )
    document.write(5 + " x 6 = " + (5 * 6) + "<br>" )
    document.write(5 + " x 7 = " + (5 * 7) + "<br>" )
    document.write(5 + " x 8 = " + (5 * 8) + "<br>" )
    document.write(5 + " x 9 = " + (5 * 9) + "<br>" )
    document.write(5 + " x 10 = " + (5 * 10) + "<br>" )
    }

//05 second method
var tableOf = prompt("Please enter table number you want to see");
var defaultValue = 5;
let i = 1;
if(+tableOf) {
    for(let i = 1; i <= 10; i++) {
        document.write(tableOf, " x " , i , " = ", i*tableOf)
        document.write("<br>");
        
    }
} else{
    for(let i = 1; i <= 10; i++) {
        document.write(defaultValue, " x ", i , " = ", i*defaultValue)
        document.write("<br>");
    }
}

//06 Subjects table
var subject1 = prompt("Enter subject no. 1")
alert("Your subject no. 01 is: " + subject1)

var subject2 = prompt("Enter subject no. 2")
alert("Your subject no. 01 is: " + subject2)

var subject3 = prompt("Enter subject no. 3")
alert("Your subject no. 01 is: " + subject3)

var totalMarks = 100

var subMarks1 = prompt("Enter marks of subject no. 1 " + subject1)
var subMarks2 = prompt("Enter marks of subject no. 2 " + subject2)
var subMarks3 = prompt("Enter marks of subject no. 3 " + subject3)

document.write(subject1 + " " + totalMarks + " " + subMarks1 + " " + (subMarks1 * 100 / totalMarks) + "%")
document.write("<br>")
document.write(subject2 + " " + totalMarks + " " + subMarks2 + " " + (subMarks1 * 100 / totalMarks) + "%")
document.write("<br>")
document.write(subject3 + " " + totalMarks + " " + subMarks3 + " " + (subMarks1 * 100 / totalMarks) + "%")
document.write("<br>")
document.write("<br>")

var subTotal = subMarks1 + subMarks2 + subMarks3
document.write(subTotal)
