function addressBook(info) {
    let personInfo = {}
    for (let line of info) {
        let [name, phone] = line.split(':')
        personInfo[name] = phone
    }
    let sortedEntries = Object.entries(personInfo).sort((a, b) => a[0].localeCompare(b[0]))
    sortedEntries.forEach(line => console.log(`${line[0]} -> ${line[1]}`))
}

addressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']
)