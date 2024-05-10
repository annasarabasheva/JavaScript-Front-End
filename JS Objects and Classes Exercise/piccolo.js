function parking(info) {
    let carsIn = []
    for (let line of info) {
        let [command, number] = line.split(', ');
        if (command === "IN" && !carsIn.includes(number)) {
            carsIn.push(number)

        } else if (command === "OUT" && carsIn.includes(number)) {
            let index = carsIn.indexOf(number);
            if (index !== -1) {
                carsIn.splice(index, 1);
            }
        }
        
    }

    if (carsIn.length === 0) {
        console.log('Parking Lot is Empty');
    } else {
        let sortedCars = carsIn.sort()
        console.log(carsIn.join('\n'))
    }
}


parking(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']
)
