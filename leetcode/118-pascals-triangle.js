/**
 * @param {number} numRows
 * @return {number[][]}
 */

/*
Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
*/


var generate = function(numRows) {
    if(numRows === 1) return [[1]];
    if(numRows === 2) return [[1],[1,1]]

    const prevRows = generate(numRows-1)
    const lastPrevRow = prevRows[prevRows.length-1];
    const newRow = [1]
    for(let i = 0; i<lastPrevRow.length-1; i++){
        let currentNum = lastPrevRow[i]
        let nextNum = lastPrevRow[i+1];
        newRow.push(currentNum+nextNum)
    }
    newRow.push(1)
    prevRows.push(newRow)
    return prevRows
};

console.log(generate(1))
console.log(generate(2))
console.log(generate(3))
console.log(generate(4))
console.log(generate(5))




/*
    [1]
    [1,1]
    [1,2,1]
    [1,3,3,1]
    [1,4,6,4,1]
    [1,5,10,10,5,1]



*/