function solve(info) {
    let words = info.shift().split(' ');
    let times = {}
    for (let word of words) {
        times[word] = 0
        for (let el of info) {
            if (el === word) {
                times[word] += 1
            }
        }
    }
    Object.entries(times).sort((a, b) => b[1] - a[1]).forEach(line => console.log(`${line[0]} - ${line[1]}`))

}

solve([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ]
    )