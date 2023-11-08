/**
 * @param {number} rowIndex
 * @return {number[]}
 */

/*
Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

Example 1:
Input: rowIndex = 3
Output: [1,3,3,1]

Example 2:
Input: rowIndex = 0
Output: [1]

Example 3:
Input: rowIndex = 1
Output: [1,1]
*/
var getRow = function(rowIndex) {
    if(rowIndex === 0) return [1]
    if(rowIndex === 1) return [1,1]
    const result = [1]
    const prevRow = getRow(rowIndex-1);
    for(let i = 0; i<prevRow.length-1; i++){
        const num = prevRow[i]
        const nextNum = prevRow[i+1]
        result.push(num+nextNum)
    }
    result.push(1);
    return result;
};