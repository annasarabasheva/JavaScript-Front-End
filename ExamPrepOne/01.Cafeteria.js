function cafeteria(data) {
    const numberBaristas = Number(data.shift());
    const dataCopy = data.slice()
    let baristasInfo = {}
    for (let i=0; i < numberBaristas; i++) {
        let [name, shift, coffees] = dataCopy[i].split(' ')
        let changedCoffees = coffees.split(',')
        baristasInfo[name] = {shift: shift, coffees: changedCoffees}
        data.shift()
    }

    for(let i=0; i < data.length; i++) {
        let command = data[i].split(' / ')[0]
        if (command === 'Closed') {
            for (const key in baristasInfo) {
                console.log(`Barista: ${key}, Shift: ${baristasInfo[key].shift}, Drinks: ${baristasInfo[key].coffees.join(', ')}`)
            }
            break
        }

        if (command === 'Prepare') {
            let [command, name, shift, coffee] = data[i].split(' / ');
            if (baristasInfo[name].shift === shift && baristasInfo[name].coffees.includes(coffee)) {
                console.log(`${name} has prepared a ${coffee} for you!`)
            } else {
                console.log(`${name} is not available to prepare a ${coffee}.`)
            }
        } else if (command === 'Change Shift') {
            let [command, name, shift] = data[i].split(' / ');
            baristasInfo[name].shift = shift;
            console.log(`${name} has updated his shift to: ${shift}`)
        } else if (command === 'Learn') {
            let [command, name, coffee] = data[i].split(' / ');
            if (baristasInfo[name].coffees.includes(coffee)) {
                console.log(`${name} knows how to make ${coffee}.`) 
            } else {
                baristasInfo[name].coffees.push(coffee);
                console.log(`${name} has learned a new coffee type: ${coffee}.`)
            }


    
        }


}

}

cafeteria(['4',
'Alice day Espresso,Cappuccino',
'Bob night Latte,Mocha',
'Carol day Americano,Mocha',
'David night Espresso',
'Prepare / Alice / day / Espresso',
'Change Shift / Bob / day',
'Learn / Carol / Latte',
'Prepare / Bob / night / Latte',
'Learn / David / Cappuccino',
'Change Shift / Alice / night',
 'Learn / Bob / Mocha',
'Prepare / David / night / Espresso',
'Closed']

    )