/**
 * Return a string representing the path through the maze.
 * @param {array} maze
 * @param {array} index The starting point
 */
function mazeSolver(maze, index = [0, 0], result="") {
	//base case
	const [row,column] = index;
	console.log({result, index, row, column});
	if(maze[row][column] === "e"){
		console.log("found it", result)
		return result;
	}
	const spotToRight = maze[row][column+1];
	let spotToBottom;
	if(maze[row+1] === undefined){
		spotToBottom = undefined;
	} else{
		spotToBottom = maze[row+1][column];
	}
	//if both spot to right and spot underneath are both either * or out of bounds, then this path will reset
	if((spotToRight === "*" || spotToRight === undefined) && (spotToBottom === "*" || spotToBottom === undefined) ){
		// result = ""
		return result;
	}
	//if only the spot to the right is either * or out of bounds, then you can go down
	if((spotToRight === "*" || spotToRight === undefined) && (spotToBottom === " " || spotToBottom === "e")){
		result = mazeSolver(maze, [row+1,column], result+"D")
	}
	//if only the spot to the bottom is either * or out of bounds, then you can go right
	if((spotToBottom === "*" || spotToBottom === undefined) && (spotToRight === " " || spotToRight === "e")){
		result = mazeSolver(maze, [row,column+1], result+"R")
	}
	//if both the spot to the bottom and spot to the right are available, you can go both right and bottom
	// if((spotToRight === " " || spotToRight === "e") && (spotToBottom === " " || spotToBottom === "e")){
	if((spotToRight === " ") && (spotToBottom === " ")){
		result = mazeSolver(maze, [row, column+1], result+"R")
		if(result.length === 0){
			result = mazeSolver(maze, [row+1, column], result+"D")
		}

	}
	return result;

}


let baseCaseMaze = [
  ["e"]
]

let testMaze = [
  [" ", " ", "*", " "],
  [" ", "*", " ", " "],
  [" ", " ", " ", "e"]
]

let mySmallMaze = [
  [' ', ' ', ' '],
  [' ', '*', ' '],
  [' ', ' ', 'e']
];

let mySmallMaze2 = [
	[" ", "*", " "],
	[" ", "*", " "],
	[" ", " ", "e"],
];

let maze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];


console.log(mazeSolver(mySmallMaze2))
// console.log(mazeSolver(testMaze))
// console.log(mazeSolver(maze))


module.exports = mazeSolver;


/* 
*/