// declare and initialize counter to 0
let count = 0;

// declare the fix number
const fixedNumber = 6174;

/**
 * 
 * @param {integer} num 
 * @returns integer
 */
const chinedusConstant = (num) => {    

    // convert the numbers into an array
    let numArray = num.toString().split('');

    // sort the array in ascending order and convert it back to integer
    let ascending = parseInt(numArray.sort((a, b) => {
        return a - b;
    }).join().replace(/,/g, ''));

    // sort the array in descending order and convert it back to integer
    let descending = parseInt(numArray.sort((a, b) => {
        return b - a;
    }).join().replace(/,/g, ''));
    
    // perform the subtraction
    let answer = descending - ascending;

    // increment the count
    count = count + 1;

    /* if the answer is not equal to the fixedNumber call chinedusConstant() 
        passing the answer as an argument
    */
    if (answer != fixedNumber) {
        chinedusConstant(answer);
    } 

    // return the count 
    return count;
}
    

const result = chinedusConstant(3524)
console.log(result)