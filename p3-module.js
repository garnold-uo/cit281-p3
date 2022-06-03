/*
    CIT 281 Project 3
    Name: Garrett Arnold
*/

function validDenomination(coin) {
    // Test if coin = 1, 5, 10, 25, 50, 100
    return [1, 5, 10, 25, 50, 100].indexOf(coin) !== -1;
}

function valueFromCoinObject(obj) {
    // Extract denom and count from obj
    // Set default values of denom and count to 0
    // Calculate value of coin object

    const { denom = 0, count = 0, } = obj;
    return denom * count;
}

function valueFromArray(arr) {
    // When arr contains inner array
    if (Array.isArray(arr[0])) {
        arr = arr[0];
    }

    // Sum of all values in arr
    return arr.reduce((accumulator, currentObj) =>
        accumulator + valueFromCoinObject(currentObj), 0);
}

function coinCount(...coinage) {
    // Call and return valueFromArray() with coinage as paramater 
    return valueFromArray(coinage)
}

module.exports = {
    // Export coinCount
    coinCount
};


console.log("{}", coinCount({denom: 5, count: 3}));
console.log("{}s", coinCount({denom: 5, count: 3},{denom: 10, count: 2}));
const coins = [{denom: 25, count: 2},{denom: 1, count: 7}];
console.log("...[{}]", coinCount(...coins));
console.log("[{}]", coinCount(coins));
