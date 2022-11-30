// Task 1
console.log('Task 1');
function getDiagonal(sideLength){
    diagonal = sideLength*Math.sqrt(2);
    console.log(`The diagonal of the square is ${diagonal}`);
}

getDiagonal(9);

// Task 2
console.log('Task 2');
// a,b,c are the sides of triangle

function getAreaOfTriangle(a,b,c){
    let p = (a+b+c)/2;
    let area = Math.sqrt(p*(p-a)*(p-b)*(p-c));
    console.log(`Area of triangle is ${area}`);
}

getAreaOfTriangle(5,6,7);

// Task 3
console.log('Task 3');

function circle(radius){
    let  circumference = 2*Math.PI*radius;
    console.log(`the circumference of the circle is ${circumference}`);
    let area = Math.PI*radius*radius;
    console.log(`the area of the circle is ${area}`);
}

circle(4);