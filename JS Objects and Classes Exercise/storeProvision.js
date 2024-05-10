function storeProvision(first, second) {
    let provision = {};
    for (let i = 0; i < first.length; i++) {
        if (i % 2 == 0) {
            provision[first[i]] = Number(first[i + 1]);
        }
    }

    for (let i = 0; i < second.length; i++) {
        if (i % 2 == 0) {
            if (provision[second[i]]) {
                provision[second[i]] += Number(second[i + 1]);
            } else {
                provision[second[i]] = Number(second[i + 1]);

            }
        }
    }
    Object.entries(provision).forEach(line => console.log(`${line[0]} -> ${line[1]}`));
    
}

storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
    );