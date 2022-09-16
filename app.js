console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count){
    for(let i = 1; i <= count; i++){
        if(i % 2 != 0){
            console.log(i)
        }
       
    }
}
printOdds(15);


// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkAge(name, age){
    let aboveSixteen = `Congrats ${name}! You can drive!`;
    let belowSixteen = `Sorry ${name}, but you need to wait until you are 16.`;

    if(age < 16){
        console.log(belowSixteen);
    }
    else{
        console.log(aboveSixteen);
    }
}
checkAge("Jennie", 30);
checkAge("Reid", 8);
checkAge("Katy", 16);

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
function checkQuadrant(x , y){
    if(x > 0 && y > 0){
        return 1;
    }
    else if(x < 0 && y > 0){
        return 2;
    }
    else if(x < 0 && y < 0){
        return 3;
    }
    else if(x > 0 && y < 0){
        return 4;
    }
    else if(x == 0 && y != 0){
        return "X Axis";
    }
    else if(x != 0 && y == 0){
        return "Y Axis";
    }
    else{
        return "Origin";
    }
}

console.log(checkQuadrant(-2, 4));
console.log(checkQuadrant(1, -2));
console.log(checkQuadrant(-3, 2));
console.log(checkQuadrant(-1, -2));
console.log(checkQuadrant(1, 0));
console.log(checkQuadrant(0, 0));
console.log(checkQuadrant(0, 1));

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
function isValidTriangle(a, b, c){
    return (a + b > c && a + c > b && b + c > a)
        
    
}
function checkTriangle(a, b, c){
    let isValid = isValidTriangle(a, b, c);
        if (isValid){
            if(a == b && b == c){
                return `Equilateral`;
            }
            else if(a == b || b == c || a == c){
                return `Isosceles`
            }
            else{
                return `Scalene`
            }
        }
        else{
            return `Not a valid triangle`;
        }
    
}
console.log(checkTriangle(1,2,3));
console.log(checkTriangle(3,3,3));
console.log(checkTriangle(1,2,2));
console.log(checkTriangle(1,1,2));

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");
function dataUsageFeedback(planLimit, day, usage){
    let periodLength = 30;
    let currentAvg = usage / day;
    let projectedAvg = planLimit / periodLength;
    let remainingDays = periodLength - day;
    let projectedUsage = remainingDays * currentAvg;
    let statusMsg;

    console.log(`${day} day(s) used, ${periodLength - day} day(s) remaining`);
    console.log(`Average projected use: ${projectedAvg} GB/day`);

    if(currentAvg > projectedAvg){
        statusMsg = "EXCEEDING";
    }
    else if( currentAvg < projectedAvg){
        statusMsg = "UNDER";
    }
    else {
        statusMsg = "AT";
    }

    console.log(`You are ${statusMsg} your average daily use (${currentAvg} GB/day),
    continuing this usage, you'll end up using ${planLimit - projectedUsage} GB from your data limit.`);

}
dataUsageFeedback(50, 12, 2);
