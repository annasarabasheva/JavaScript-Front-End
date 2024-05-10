function inventory(array) {
    let heroes = [];
    for (let line of array) {
        let [hero, level, items] = line.split(' / ');
        heroes.push({
            name: hero,
            level: Number(level),
            items: items
        });
    }
    heroes.sort((a, b) => a.level - b.level);

    // Format and print each hero's information
    heroes.forEach(hero => {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    });
} 
  

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]
    );