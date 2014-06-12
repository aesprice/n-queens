/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

// var makeEmptyMatrix = function(n) {
//   return _(_.range(n)).map(function() {
//     return _(_.range(n)).map(function() {
//       return 0;
//     });
//   });
// };

window.findNRooksSolution = function(n) {
  var board = new Board({n:n});
  var solution = []; //fixme
  for(var i = 0; i < n; i++) {
    solution.push(board.get(i));
  }

  var pieces = 0;
  var placePiece = function(xStart, yStart){
    console.log('recursing at: ' + xStart + ', ' + yStart)
    for(var y = yStart; y < n; y++) {
      // console.log('row: ' + y);
      for(var x = xStart; x < n; x++) {
        // console.log('column: ' + x);
        if (pieces === n) {
          return;
        }
        console.log('checking at ' + x + ', ' + y);
        solution[y][x] = 1;
        board.set(solution);
        if(!board.hasRowConflictAt(y) && !board.hasColConflictAt(x)){
          console.log('success!')
          pieces++;
          if(x === n - 1) {
            xNext = 0;
            yNext = y + 1;
          } else {
            xNext = x + 1;
            yNext = y;
          }
          placePiece(xNext, yNext);
        } else {
          solution[y][x] = 0;
          board.set(solution);
        }
      }
    }
  };

  placePiece(0, 0);

  console.dir(solution);
  return solution;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var board = new Board({n:n});
  var solutionCount = 0; //fixme
  var solution = [];
  for(var i = 0; i < n; i++) {
    solution.push(board.get(i));
  }
  var pieces = 0;
  var placePiece = function(x, y){
    for(y; y < n; y++) {
      for(x; x < n; x++) {
        console.log('tile check');
        solution[y][x] = 1;
        board.set(solution);
        if(!board.hasRowConflictAt(y) && !board.hasColConflictAt(x)){
          pieces++;
          if (pieces === n) {
            solutionCount++;
          }
          if(x === n - 1) {
            placePiece(0, y+1);
          } else {
            placePiece(x+1, y);
          }
        }

        solution[y][x] = 0;
        board.set(solution);

      }
    }
  };


  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
