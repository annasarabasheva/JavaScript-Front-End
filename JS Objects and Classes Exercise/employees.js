function employees(names) {
    let employeesNames = {};
    for (let name of names) {
        employeesNames[name] = name.length
    }
    Object.entries(employeesNames).forEach(line => console.log(`Name: ${line[0]} -- Personal Number: ${line[1]}`));
}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    )