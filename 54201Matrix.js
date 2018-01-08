/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function(matrix) {

  var stack = [];
  // create result array
  var result = new Array(matrix.length);
  var copy = new Array(matrix[0].length).fill(0);
  for (var i = 0; i < result.length; i++) {
      result[i] = copy.slice();
  }

  // push 1 values pos to stack.
  for (var i = 0; i < matrix.length; i++) {
      for (var j = 0; j < matrix[0].length; j++) {
          if (matrix[i][j] === 1) {
              stack.push([i, j]);
          }
      }
  }
  var step = 0;
  // increase the step, for each pos, if nearby cell
  // is 0, then make step and popout this pos from stack
  // refresh the matrix for poped out cell.
  while(stack.length) {
      step++;
      var tempStack = [];
      var removeMatrixValue = [];
      for (var i = 0; i < stack.length; i++) {
          var pos = stack[i];
          var x = pos[0];
          var y = pos[1];
          if (x > 0 && matrix[x - 1][y] === 0 ||
             x < matrix.length - 1 && matrix[x + 1][y] === 0 ||
             y > 0 && matrix[x][y - 1] === 0 ||
             y < matrix[0].length - 1 && matrix[x][y + 1] === 0) {
              result[x][y] = step;
              removeMatrixValue.push(pos);
          }
          else {
              tempStack.push(pos);
          }
      }
      for (var i = 0; i < removeMatrixValue.length; i++) {
          matrix[removeMatrixValue[i][0]][removeMatrixValue[i][1]] = 0;
      }
      stack = tempStack;
  }
  return result;
};

module.exports = updateMatrix;