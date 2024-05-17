function solve(array, num) {
    let newArray = [];
    for (let i = 0; i < array.length; i += num){
        newArray.push(array[i]);
    }
    return newArray;
}
let result = solve(['1', 
'2',
'3', 
'4', 
'5'], 
6

)
console.log(result);