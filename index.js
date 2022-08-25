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

//Rest of Homework

//1.Write a function that takes two numbers (a and b) as Sum a and Return the result

function sum(a, b) {
    const suma = a + b;
    return suma;
}

console.log(sum(2, 5))

//3. Write a function that takes a number(a) as argument Split a into its individual digits and return them in an array.

function splitNum(a) {
    const splitedNum = a.toString().split('');
    return splitedNum;
}

console.log(splitNum(1989))

//5. Write a function that takes two arrays as arguments Merge both arrays and remove duplicate values Sort the merge result in ascending order Return the resulting array
function mergeingArr(arr1, arr2) {

    const set = new Set(arr1.concat(arr2));
    const [...setArr] = set;
    const sortArr = setArr.sort()

    console.log(sortArr)

}
mergeingArr([1, 3], [2, 1])

//6. Write a function that takes an object(a) and a string(b) as argument  Return true if the object has a property with key 'b' Return false otherwise
function objStr(a, b) {
    return a.hasOwnProperty(b)
}
console.log(objStr({ name: "Nijole" }, 'name'))



