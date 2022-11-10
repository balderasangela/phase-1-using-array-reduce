const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
// const totalBatteries = function batteryBatches(arr, reducer, init) {
//     let accum = init;
//     for (const element of arr) {
//         accum = reducer(accum, element);
//     };
//     return accum;
// }

// function batteryResults(totalAmount, batches) {
//     return totalAmount + batches.
// }

const totalBatteries = 31
const sumWithBatteries = batteryBatches.reduce((prevValue,currentValue) => prevValue + currentValue,totalBatteries)

 console.log(sumWithBatteries)

 