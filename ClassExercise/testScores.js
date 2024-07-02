function scoreAbove_70(testScores) {
    let filtered = testScores.filter((number) => {
        return number >= 70;
    })
    return filtered;
}
let testScores = [15, 25, 36, 47, 58, 69, 34, 82, 83, 51]
console.log(testScores);


function scoreIncreaseBy5(IncreaseScores) {
    const addition = increaseScores.map(function (number) {
        return number + 5;
    })
    return addition;
}
const increaseScores = [85, 92, 78, 88, 95]
console.log(addition);


function squareOfNumber(total) {
    let square = total.map(function (number) {
        return number ** 2;
    })
    return square;
}
let total = [2, 4, 6, 8, 10]
console.log(square)


function listOfMembersName(membersName, booksName) {
    for (let index of membersName) {


    }
}
let membersName = [Emily, Sandra, Jesisca, Vivian]



let classTiming = ["9:00AM","11:00AM","12:00AM","13:00AM"];
const classes = classTiming.filter(listOfClasses)

function listOfClasses(classes){
    for(let index in classes){
        if(classes.includes("PM") || classes.includes("PM")) {
         return classes
     }
     }
 }
console.log(classes)

let monthylyExpenses = {
    "groceries": 150,
    "diningOut": 100,
    "transportation": 50,
    "entertainment": 150,
}
let totalCount = 0
for(let months in monthylyExpenses){
    totalCount += monthylyExpenses[months]
    console.log
}

