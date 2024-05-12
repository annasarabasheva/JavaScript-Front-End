function phoneBook(info) {
    let personInfo = {}
    for (let line of info) {
        let [name, phone] = line.split(' ')
        personInfo[name] = phone
    }
    Object.entries(personInfo).forEach(line => console.log(`${line[0]} -> ${line[1]}`))
}

phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
);