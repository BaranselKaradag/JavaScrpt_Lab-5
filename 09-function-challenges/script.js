// Challenge 1:
/*
function getCelsius(fahrenheit) {
         celsius=(fahrenheit - 32) * 5 / 9;
}
getCelsius(fahrenheit);
*/

const getCelsius=fahrenheit=> celsius=(fahrenheit - 32) * 5 / 9;
console.log(getCelsius(32));
console.log(`The temperature is ${getCelsius(32)} \xB0C`);

// Challenge 2:

const numbers=[1,2,3,4,5];

const minMax=numbers=> {return result={min:Math.min(numbers),max:Math.max(numbers)}};
console.log(minMax(numbers));
// { min: 1, max: 5 }

// Challenge 3:


(function(length, width) {
    let area = length * width;
    console.log(` The length is ${length} , a width is ${width} and The area of a rectangle is ${area}.`);
})(10, 5);