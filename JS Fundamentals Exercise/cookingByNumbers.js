function solve(startingPoint, ...operations) {
    let number = Number(startingPoint);

    for (let operation of operations) {
        switch (operation) {
            case "chop":
                number /= 2;
                break;
            case "dice":
                number = Math.sqrt(number);
                break;
            case "spice":
                number += 1;
                break;
            case "bake":
                number *= 3;
                break;
            case "fillet":
                number *= 0.8; // subtracting 20% is equivalent to multiplying by 0.8
                break;
            default:
                console.log("Invalid operation:", operation);
                return;
        }
        console.log(number);
    }
}
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet')