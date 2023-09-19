// // var biryaniSShopIsOpen = true
// // var isBiryaniGaram = true
// // var fastFoodShopIsOpen = true
// // var isZingerAvailable = true
// // var daalChawalWalaIsOpen = true
// // var isHygenic = true


// // if (biryaniSShopIsOpen && isBiryaniGaram) {
// //     alert("biryani le ana")
// // } else if (fastFoodShopIsOpen && isZingerAvailable) {
// //     alert("fast food le ana")
// // } else if (daalChawalWalaIsOpen && isHygenic) {
// //     alert("bring daal chawal")
// // }

// // Object # 6 class activity

// // var car = {
// //     make: 'KIA',
// //     model: 'Sportage',
// //     year: 2020,
// //     colors: ['black', 'white', 'gray'],
// //     hybrid: true,
// //     drive: function () {
// //         console.log("Drive Safe and follow rules");
// //     },
// //     Stop: function () {
// //         console.log("Stop on Red signal")
// //     }
// // };

// // ******
// // aik function bnana hai
// // agar me usko argument deta hun 5
// // tou wo apko return back kare 10
// // same vice versa

// function number(num1) {
//     if(a === 5) {
//         return 10
//     } else {
//         return 5
//     }

// }

// console.log(number(5))


//Condition Challenge Slide 35

var person1 = {
    name: "Steve",
    age: 16,
    status: "resident"
}

var person2 = {
    name:"John",
    age: 24,
    status: "resident"
}

function nicEligibility() {
    if (person1.age > 18 && person.status == "resident") {
        alert("Yes Mr " + person.name + " , you are eligible for NIC") 
    } else {
        alert("Sorry Mr " + person.name + " , barey ho k ana")
    }
}

nicEligibility(person1)
nicEligibility(person2)