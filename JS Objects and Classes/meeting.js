function solve(info) {
    let successfulMeeting = {};
    
    for (let line of info) {
        let [weekday, name] = line.split(' ');
        if (successfulMeeting[weekday]) {
            console.log(`Conflict on ${weekday}!`);
            continue
        }
        successfulMeeting[weekday] = name;
        console.log(`Scheduled for ${weekday}`)
    }
    Object.entries(successfulMeeting).forEach(line => console.log(`${line[0]} -> ${line[1]}`))

}

solve(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']
)