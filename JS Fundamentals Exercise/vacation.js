function solve(num, type, day) {
    let result;
    if (type == 'Students') {
        if (day == 'Friday') {
            result = num * 8.45;

        } else if (day == 'Saturday') {
            result = num * 9.80;
        } else if (day == 'Sunday') {
            result = num * 10.46;
        }
        if (num >= 30) {
            result *= 0.85;
        } 
    } else if (type == 'Business') {
        if (num >= 100) {
            num -= 10;
        }

        if (day == 'Friday') {
            result = num * 10.90;

        } else if (day == 'Saturday') {
            result = num * 15.60;
        } else if (day == 'Sunday') {
            result = num * 16;
        }
        
    
    } else if (type == 'Regular') {

        if (day == 'Friday') {
            result = num * 15;

        } else if (day == 'Saturday') {
            result = num * 20;
        } else if (day == 'Sunday') {
            result = num * 22.50;
        }
        if (num >= 10 && num <= 20) {
            result *= 0.95;
        }
        
    
    } 
    console.log(`Total price: ${result.toFixed(2)}`)
}
solve(40,
    "Regular",
    "Saturday"
    
    )