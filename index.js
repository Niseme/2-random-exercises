//2. Write a function that takes a string as an argument.Extract the last 3 characters from the string.Return the result

function lastThree(str) {
    if (typeof str === 'string') {
        const sliceOfThree = str.slice(-3);
        console.log(sliceOfThree)
    }

}

lastThree('Labas');

//4. Write a function that takes an array (a) and a number (n) as arguments It should return the last n elements of a

function lastElements(arr, n) {
    if (n <= arr.length) {
        return arr.slice(-n);
    } else {
        console.log('Change you number')
    }

}

console.log(lastElements([1, 2, 3, 4, 5], 3));

