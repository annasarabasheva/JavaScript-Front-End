function wildWestAdventure(data) {
    const numCharacters = data.shift();
    const copyData = data.slice()
    let characters = {};
    for (let i=0; i < numCharacters; i++) {
        let [heroName, hp, bullets] = copyData[i].split(' ');
        hp = Number(hp);
        bullets = Number(bullets);
        characters[heroName] = {"hp": hp, "bullets": bullets};
        data.shift()
        
    }
    for(let i=0; i < data.length; i++) {
        let line = data[i].split(' - ');
        let command = line[0];
        if (command === 'Ride Off Into Sunset') {
            for (const name in characters) {
                console.log(`${name}\n HP: ${characters[name].hp}\n Bullets: ${characters[name].bullets}`)
            }
            break
        }

        if (command === 'FireShot') {
            let charName = line[1];
            let target = line[2];
            if(characters[charName].bullets > 0) {
                characters[charName].bullets -= 1;
                console.log(`${charName} has successfully hit ${target} and now has ${characters[charName].bullets} bullets!`)
            } else {
                console.log(`${charName} doesn't have enough bullets to shoot at ${target}!`)
            }
        } else if (command === 'TakeHit') {
            let charName = line[1];
            let damage = Number(line[2]);
            let attacker = line[3];
            characters[charName].hp -= damage;
            if (characters[charName].hp > 0) {
                console.log(`${charName} took a hit for ${damage} HP from ${attacker} and now has ${characters[charName].hp} HP!`)
            } else {
                delete characters[charName];
                console.log(`${charName} was gunned down by ${attacker}!`)
            }
        } else if (command === 'Reload') {
            let charName = line[1];
            if (characters[charName].bullets === 6) {
                console.log(`${charName}'s pistol is fully loaded!`)
            } else {
                let reloadedBullets = 6 - characters[charName].bullets
                characters[charName].bullets = 6;
                console.log(`${charName} reloaded ${reloadedBullets} bullets!`)
            }
        } else if (command == 'PatchUp') {
            let charName = line[1];
            let amount = Number(line[2]);
            if (characters[charName].hp === 100) {
                console.log(`${charName} is in full health!`)
            } else {
                let oldHp = characters[charName].hp
                characters[charName].hp += amount;
                if (characters[charName].hp > 100) {
                    characters[charName].hp = 100
                    amount =  characters[charName].hp - oldHp
                } 
                console.log(`${charName} patched up and recovered ${amount} HP!`)
            }

        }
    }
}







wildWestAdventure(["2",
"Gus 100 4",
"Walt 100 5",
"FireShot - Gus - Bandit",
"TakeHit - Walt - 100 - Bandit",
"Reload - Gus",
"Ride Off Into Sunset"])
