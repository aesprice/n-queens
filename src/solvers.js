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
  // var board = new Board({n:n});
  var solution = []; //fixme
  for(var y = 0; y < n; y++) {
    solution.push([]);
    for(var x = 0; x < n; x++) {
      solution[y].push(0);
    }
  }

  var row = 0;
  var conflictC = {};
  var placePiece = function(row){
    for(var i = 0; i < n; i++) {
      if(!conflictC[i]) {
        conflictC[i] = true;
        solution[row][i] = 1;
        if(row < n-1){
          placePiece(row+1);
        }
      }
    }
  };

  placePiece(row);

  return solution;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var row = 0;
  var conflictC = {};
  var solutionCount = 0;

  var placePiece = function(row){
    for(var i = 0; i < n; i++) {
      if(!conflictC[i]) {
        conflictC[i] = true;
        if(row < n-1){
          placePiece(row+1);
        } else if (row === n-1) {
          solutionCount++;
        }
        conflictC[i] = false;
      }
    }
  };

  placePiece(row);

  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var row = 0;
  var pieces = 0;
  var conflictC = {};
  var conflictMajD = {};
  var conflictMinD = {};
  var solution = [];

  for(var y = 0; y < n; y++){
    solution.push([]);
    for(var x = 0; x < n; x++){
      solution[y].push(0);
    }
  }

  var placePiece = function(row){
    for(var i = 0; i < n; i++) {
      if(!conflictC[i] && !conflictMajD[row - i] && !conflictMinD[row + i] && pieces < n) {
        conflictC[i] = true;
        conflictMajD[row - i] = true;
        conflictMinD[row + i] = true;
        pieces++;
        solution[row][i] = 1;
        if(pieces === n){
          return;
        }else{
          if(row < n-1){
            placePiece(row+1);
          }
        }
        solution[row][i] = 0;
        conflictC[i] = false;
        conflictMajD[row - i] = false;
        conflictMinD[row + i] = false;
      }
    }
  };

  placePiece(row);

  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var row = 0;
  var conflictC = {};
  var conflictMajD = {};
  var conflictMinD = {};
  var solutionCount = 0;

  var placePiece = function(row){
    for(var i = 0; i < n; i++) {
      if(!conflictC[i] && !conflictMajD[row - i] && !conflictMinD[row + i]) {
        conflictC[i] = true;
        conflictMajD[row - i] = true;
        conflictMinD[row + i] = true;
        if(row < n-1){
          placePiece(row+1);
        } else if (row === n-1) {
          solutionCount++;
        }
        conflictC[i] = false;
        conflictMajD[row - i] = false;
        conflictMinD[row + i] = false;
      }
    }
  };

  placePiece(row);

  return solutionCount;
};
