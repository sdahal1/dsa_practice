/* 
Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.

Constraints:
board.length == 9
board[i].length == 9
board[i][j] is a digit 1-9 or '.'.

Example 1:

Input: board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: true

Example 2:

Input: board = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: false
Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.
*/

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  let columnMap = {};
  let gridMap = {}
  for(let i = 0; i<board.length; i++){
    const currentRow = board[i];
    let rowMap = {};
    for(let j = 0; j<currentRow.length; j++){
      //check row validity logic
      const currentNum = currentRow[j];
      if(currentNum in rowMap && currentNum !== ".") return false;
      if(currentNum !== ".") rowMap[currentNum] = true; 

      //check column validity logic
      if(!(j in columnMap)){
        columnMap[j] = [currentNum]
      }else if(currentNum !== "." && columnMap[j].includes(currentNum)){
        return false
      }else{
        columnMap[j].push(currentNum)
      }
    }
  }
  const grid1 = []
  const grid2 = []
  const grid3 = []
  const grid4 = []
  const grid5 = []
  const grid6 = []
  const grid7 = []
  const grid8 = []
  const grid9 = []

  for(let i = 0; i< board.length; i++){
    for(let j = 0; j<board[i].length; j++){
      const currentNum = board[i][j];
      if(i<=2 && j<=2){
        if(currentNum !== "."){
          if(grid1.includes(currentNum)) return false;
          grid1.push(currentNum)
        }
      }
      else if(i<=2 && j<=5){
        if(currentNum !== "."){
          if(grid2.includes(currentNum)) return false;
          grid2.push(currentNum)
        }
      }
      else if(i<=2 && j<=8){
        if(currentNum !== "."){
          if(grid3.includes(currentNum)) return false;
          grid3.push(currentNum)
        }
      }
      else if(i<=5 && j<=2){
        if(currentNum !== "."){
          if(grid4.includes(currentNum)) return false;
          grid4.push(currentNum)
        }
      }
      else if(i<=5 && j<=5){
        if(currentNum !== "."){
          if(grid5.includes(currentNum)) return false;
          grid5.push(currentNum)
        }
      }
      else if(i<=5 && j<=8){
        if(currentNum !== "."){
          if(grid6.includes(currentNum)) return false;
          grid6.push(currentNum)
        }
      }
      else if(i<=8 && j<=2){
        if(currentNum !== "."){
          if(grid7.includes(currentNum)) return false;
          grid7.push(currentNum)
        }
      }
      else if(i<=8 && j<=5){
        if(currentNum !== "."){
          if(grid8.includes(currentNum)) return false;
          grid8.push(currentNum)
        }
      }
      else if(i<=8 && j<=8){
        if(currentNum !== "."){
          if(grid9.includes(currentNum)) return false;
          grid9.push(currentNum)
        }
      }
    }
  }
  // console.log(columnMap)

  return true;
};

const board1 = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],//i=0
  //j
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

/*
i = 0, j = 0 -> check:
  [0,0],[0,1],[0,2]
  [1,0],[1,1],[1,2]
  [2,0],[2,1],[2,2]

i = 0, j = 3 -> check:
  [0,3],[0,4],[0,5]
  [1,3],[1,4],[1,5]
  [2,3],[2,4],[2,5]

i = 0, j = 6 -> check:
  [0,0],[0,1],[0,2]
  [1,0],[1,1],[1,2]
  [2,0],[2,1],[2,2]


columnMap = {
  0: [5,6],
  1: [3,.],
  2: [.,.],
  3: [.,1],
  4: [7,9],
  5: [.,5],
  6: [.,.],
  7: [.,.],
  8: [.,.]
};
j = 0;

*/

console.log(isValidSudoku(board1))