function solve(object) {
    Object.entries(object).forEach(line => console.log(`${line[0]} -> ${line[1]}`));
}



solve({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
}
);