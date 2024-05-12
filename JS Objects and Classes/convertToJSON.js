function solve(firstName, lastName, hairColor) {
    let object = {name: firstName, lastName: lastName, hairColor: hairColor}
    let JSONFromObject = JSON.stringify(object)
    console.log(JSONFromObject);
}

solve('George', 'Jones', 'Brown')