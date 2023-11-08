/**
 * Return a string representing the path through the maze.
 * @param {array} maze
 * @param {array} index The starting point
 */
function mazeSolver(maze, index = [0, 0]) {
  if (index[0] < 0 || index[0] >= maze.length || index[1] < 0 || index[1] >= maze[0].length) return false;
  let curr = maze[index[0]][index[1]];
  if (curr == 'e') return '';
  else if (curr == '*') return false;
  else {
    // mark
    maze[index[0]][index[1]] = '*';
    // try them all
    // right
    let rSolution = mazeSolver(maze, [index[0], index[1] + 1]);
    if(rSolution !== false) {
      return 'R' + rSolution;
    }
    let lSolution = mazeSolver(maze, [index[0], index[1] - 1]);
    if(lSolution !== false) {
      return 'L' + lSolution;
    }
    let dSolution = mazeSolver(maze, [index[0] + 1, index[1]]);
    if(dSolution !== false) {
      return 'D' + dSolution;
    }
    let uSolution = mazeSolver(maze, [index[0] - 1, index[1]]);
    if(uSolution !== false) {
      return 'U' + uSolution;
    }
    return false;
  }
}

let mySmallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
];

module.exports = mazeSolver;
