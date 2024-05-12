function solve(json) {
    let objectFromJSON = JSON.parse(json);
    Object.entries(objectFromJSON).forEach(line => console.log(`${line[0]}: ${line[1]}`));
}


solve('{"name": "George", "age": 40, "town": "Sofia"}');