const countElement = (arr, x) => {
    let count = 0
    for(let i=0; i<arr.length; i++){
        if(arr[i] === x){
            count++
        }
    }
    if(count === 1){
        console.log(`${x} appears ${count} times in array`);
    }
    return count  
}
let arr = [1,4,2,3,4,5,6,9,9]
let times = 0

const arr2 = arr.reduce((newArr, element) => {
    if(newArr.indexOf(element) === -1){
        newArr.push(element)
    }
    return newArr
}, [])

for(let i=0; i<arr2.length; i++){
    let count = countElement(arr, arr2[i])
    if(count === 1){
        times++
    }
}
console.log(`Number of diferent element: ${times}`);
// countElement(arr, 1)
// const countss = (arr) => {
//     let b = [1, 1, 1, 1, 1, 1, 1]
//     for(let i = 0; i < arr.length; i++){
//         if(b[i] !== 0){
//             for(let j = i + 1; j < arr.length; j++){
//                 if(arr[i] === arr[j]){
//                     b[i]++;
//                     b[j] = 0
//                 }
//             }
//         }
//     }
    
// }

function numberMax (n) {
    if(n === 0){
        return 0
    }
    let max = 0;
    while (n > 0) {
        let tempt = n % 10
        n = n / 10
        if(tempt > max){
            max = tempt
        }
    }
    return max
}

let n = parseInt(prompt("Enter the positve number: "));
// let n = 457

console.log(`The max number is ${numberMax(n)}`);


