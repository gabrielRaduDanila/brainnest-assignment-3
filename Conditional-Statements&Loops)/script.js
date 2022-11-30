function compareIntegers(a,b){
    if (a>b){
        console.log(`${a} is bigger than ${b}`);
    } else {
        console.log(`${b} is bigger than ${a}`);
    }
}

compareIntegers(101,99);
compareIntegers(76,89);

function evenOrOdd(n){
    if (n % 2 === 0){
        console.log(`The number is even`);
    } else {
        console.log(`The number is odd`);
    }
}

evenOrOdd(99);
evenOrOdd(90);