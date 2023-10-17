// function findMissingNumber(numberArr) {
//     if (numberArr.length === 0) {
//         return 1
//     } else if (!numberArr) {
//         return undefined
//     };

//     const set = new Set(numberArr);

//     for (let i = 1; i <= numberArr.length; i++) {
//         if (!set.has(i)) {
//             return i;
//         }
//     }

// }

function findMissingNumber(numberArr) {
    if (!numberArr) {
        return undefined;
    } else if (numberArr.length === 0) {
        return 1
    }

    const n = numberArr.length + 1;
    const expetedSum = (n * (n + 1)) / 2;

    let acualResult = 0

    for (let i = 0; i < numberArr.length; i++) {
        acualResult += numberArr[i]
    }

    return expetedSum - acualResult;
}
module.exports = findMissingNumber;
