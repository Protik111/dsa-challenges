function findMaxNumber(numberArr) {
    let largestNumber = 0;
    for (let i = 0; i < numberArr.length; i++) {
        if (numberArr[i] > largestNumber) {
            largestNumber = numberArr[i]
        }
    }
    return largestNumber;
}

//Solution 2
// function findMaxNumber(numberArr) {
//     return Math.max(...numberArr)
// }

module.exports = findMaxNumber;
