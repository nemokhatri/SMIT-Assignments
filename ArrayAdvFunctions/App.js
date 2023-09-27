// const bakery = [
//     {item: "biscuit", price: 10, qty: 20},
//     {item: "lays", price: 50, qty: 5},
//     {item: "coldDrink", price: 30, qty: 10}
// ]

// // for(let i = 0; i < bakery.length; i++)
// // console.log(bakery[i].item);

// bakery.forEach(function(val) {
//     console.log(`Hi, this is ${val.item} , it is ${val.price} rupees each and only ${val.qty} is available)`);
// })

// //challenge map
// const student = [
//     {id: 1, name: "peter", score: 80, favSubject: "math"},
//     {id: 2, name: "john", score: 70, favSubject: "english"},
//     {id: 3, name: "bobo", score: 60, favSubject: "physics"},
//     {id: 4, name: "susy", score: 50, favSubject: "chemistry"},
//     {id: 5, name: "chris", score: 40, favSubject: "biology"}
// ]

// const updatedStudents = student.map(function (student) {
//     (student.role = 'student')
// }
//     return {id: student.id, name: student.name, score: student.score, favSubject: student.favSubject, role: role="student"}
// )

//map and filter challenge
const student = [
    {id: 1, name: "peter", score: 80, favSubject: "math"},
    {id: 2, name: "john", score: 90, favSubject: "english"},
    {id: 3, name: "bobo", score: 60, favSubject: "physics"},
    {id: 4, name: "susy", score: 50, favSubject: "chemistry"},
    {id: 5, name: "chris", score: 100, favSubject: "biology"}
]

// const highScores = student.filter(function(val) {
//     return (val.score >= 80)
// }
// ).map(function(bestScore) {
//     return bestScore.score
// })

// console.log(highScores);

const specificId = student.find(function(spId) {
    return spId.id
}
).name

console.log(specificId);