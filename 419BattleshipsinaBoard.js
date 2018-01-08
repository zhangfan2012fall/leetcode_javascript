/**
 * @param {character[][]} board
 * @return {number}
 [[".","X",".",".","X"],
  [".","X",".",".","X"],
  [".",".",".",".","X"],
  ["X",".","X","X","."],
  ["X",".",".",".","X"]]
 */
var countBattleships = function(board) {
    var count = 0;
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[0].length; j++) {
            if(board[i][j]=='X' && (i==0 || board[i-1][j]!='X') && (j==0 || board[i][j-1]!='X')) count++;
        }
    }
    return count;
};

module.exports = countBattleships;