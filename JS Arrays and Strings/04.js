function solve(str, startIdx, count) {
    let endIndx = startIdx + count;
    let result = str.substring(startIdx, endIndx);
    console.log(result);
}
solve('SkipWord', 4, 7);