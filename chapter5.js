// Chapter 5 assignment

// //01
var number1 = 5
var number2 = 3
var TotalScore = number1 + number2
var remarks = ("Sum of "+number1+" and "+number2+" is " +TotalScore)
document.write(remarks)
document.write("<br>");


//02 subtraction
var number1 = 5
var number2 = 3
var TotalScore = number1 - number2
var remarks = ("Sum of "+number1+" and "+number2+" is " +TotalScore)
document.write(remarks)
document.write("<br>");


//02 multiplication
var number1 = 5
var number2 = 3
var TotalScore = number1 * number2
var remarks = ("Sum of "+number1+" and "+number2+" is " +TotalScore)
document.write(remarks)
document.write("<br>");


//02 division
var number1 = 5
var number2 = 3
var TotalScore = number1 / number2
var remarks = ("Sum of "+number1+" and "+number2+" is " +TotalScore)
document.write(remarks)
document.write("<br>")

//02 modulus
var number1 = 5
var number2 = 3
var TotalScore = number1 % number2
var remarks = ("Sum of "+number1+" and "+number2+" is " +TotalScore)
document.write(remarks)
document.write("<br>")

//03 Mathematic expression
//a
var number =  5
document.write("<br>")
//b
document.write("Value after variable declaration is: " + number)
document.write("<br>")
//c
number;
//d
document.write("Initial Value: " +number)
document.write("<br>")
//e
number ++;
//f
document.write("Value after increment is: " + number)
document.write("<br>")
//g
number += 7;
//h
document.write("Value after addition is: " + number)
document.write("<br>")
//i
number --;
//j
document.write("Value after decrement is: " + number)
document.write("<br>")
//k
var remainder = number % 3;
//l
document.write("The remainder is: " + remainder)
document.write("<br>")
document.write("<br>")

//4 Cost of buying 5 tickets
var ticketCost = 600
document.write("Movie ticket price: " + ticketCost)
document.write("<br>")

var totalTickets = 5
document.write("Total tickets are: " + totalTickets)
document.write("<br>")

var totalCost = ticketCost*totalTickets
document.write("Total cost to buy " + totalTickets + " tickets to a movie is " + totalCost + "PKR")
document.write("<br>")
document.write("<br>")

//05 Table of 4
var number = 4
document.write(number + " x 1 = " + (number*1) + "<br>")
document.write(number + " x 2 = " + (number*2) + "<br>")
document.write(number + " x 3 = " + (number*3) + "<br>")
document.write(number + " x 4 = " + (number*4) + "<br>")
document.write(number + " x 5 = " + (number*5) + "<br>")
document.write(number + " x 6 = " + (number*6) + "<br>")
document.write(number + " x 7 = " + (number*7) + "<br>")
document.write(number + " x 8 = " + (number*8) + "<br>")
document.write(number + " x 9 = " + (number*9) + "<br>")
document.write(number + " x 10 = " + (number*10) + "<br>")
document.write("<br>")
document.write("<br>")

//06 celcius and Fahrenheit
//a
var celcius = 30;
//b
var cToF = (celcius * 9/5) + 32;
document.write(celcius, "°C", " is ", cToF, "°F");
document.write("<br>")
//c
var fahrenheit = 15;
//d
var fToC = (fahrenheit - 32) * 5/9;
document.write(fahrenheit, "°F", " is ", fToC, "°C")
document.write("<br>")
document.write("<br>")

//07
document.write("<h2> Imtiaz Shopping Cart </h2>")
document.write("<br>")
//a
var item1 = 1000
document.write("Price of item 1 is ", item1)
document.write("<br>")
//b
var item2 = 500
document.write("Price of item 2 is ", item2)
document.write("<br>")
//c
var qtyItem1 = 5
document.write("Quantity of item 1 is ", qtyItem1)
document.write("<br>")
//d
var qtyItem2 = 4
document.write("Quantity of item 2 is ", qtyItem2)
document.write("<br>")
//e
var ShipCharges = 250
document.write("Shipping charges ", ShipCharges)
document.write("<br>")
//Total Bill
var totalBill = (item1*qtyItem1) + (item2*qtyItem2) + ShipCharges
document.write("Your total bill of the grocery is ", totalBill)
document.write("<br>")

//08
document.write("<h2> MARK SHEET </h2>")
document.write("<br>")
var totalMarks = 1000
var marksObtained = 850
document.write("<br>")
document.write("Total Marks : " + totalMarks)
document.write("<br>")
document.write("Marks obtained : " + marksObtained)
document.write("<br>")
document.write("Percentage : " + (marksObtained / totalMarks) * 100 + '%')
document.write("<br>")

// 09
document.write("<h2> CURRENCY IN PKR </h2>")
document.write("<br>")
var usDoallar = 104.8
var riyal = 28
document.write('Total currency in PKR : '+ (usDoallar * 10) + (riyal * 25))
document.write("<br>")
document.write("<br>")

//10
var number10 = 20
document.write((number10 + 5) * 10 / 2)
document.write("<br>")
document.write("<br>")

//11 AGE CALCULATOR
var bDayYear = 1995

var curYear = 2023

var yourAge = curYear - bDayYear 

document.write("Birth Year " + bDayYear)
document.write("<br>")
document.write("Current Year " + curYear)
document.write("<br>")
document.write("Your age is " + yourAge)
document.write("<br>")
document.write("<br>")


// 12
var pie= 3.142
var radius = 20

document.write("Radius of a circle : " + pie)
document.write("<br>")
document.write("The Circumference is : " + 2 * pie * radius)
document.write("<br>")
document.write("The Area is : " + pie * (radius * radius))
document.write("<br>")
document.write("<br>")

// 13
document.write("<h2> The Lifetime Supply Calculator </h2>")
//a
var snack = 'Apple'
document.write("<br>")
//b
var curAge = 28
document.write("<br>")
//c
var maxAge = 80
//d
var amount = 20
var perYearSnack = ( amount * 365)
//e
document.write('Fav Snack : ' + snack)
document.write("<br>")
document.write('Current Age : ' + curAge)
document.write("<br>")
document.write('Estimated Maximum Age : ' + maxAge)
document.write("<br>")
document.write('Per Day Snack amount : ' + amount)
document.write("<br>")
document.write('You will need ' + ((maxAge - curAge) * perYearSnack) + ' ' + snack + ' to last you until you ripe old age ' + maxAge)
document.write("<br>")

