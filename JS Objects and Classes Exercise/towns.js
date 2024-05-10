function towns(info) {
    for (let line of info) {
        let newString = line.split(' | ');
         let town = newString[0];
         let latitude = Number(newString[1]).toFixed(2);
         let longitude = Number(newString[2]).toFixed(2);
        
        let townObject = {town: town, latitude: latitude, longitude: longitude}
        console.log(townObject);
    }
}

towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
)