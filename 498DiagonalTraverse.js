/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDiagonalOrder = function(matrix) {
    let up_right = true;
    let result = [];
    let height = matrix.length;
    if (height === 0) {
        return result;
    }
    let width = matrix[0].length;
    let i = 0;
    let j = 0;
    
    do {
        result.push(matrix[i][j]);
        if (up_right) {
            let m = i - 1;
            let n = j + 1;
            if (m > -1 && n < width) {
                i = m;
                j = n;
                continue;
            }
            
            up_right = false;
            if (m === -1 && n < width) {
                j = n;
                continue;
            }
            
            if (n === width) {
                i += 1;
                continue;
            }        
        }
        
        if (!up_right) {
            let m = i + 1;
            let n = j - 1;
            
            if (m < height && n > -1) {
                i = m;
                j = n;
                continue;
            }
            
            up_right = true;
            
            if (m === height) {
                j += 1;
                continue;
            }
            
            if (n === -1) {
                i += 1;
                continue;
            }
        }        
    }  while (result.length !== height * width)

    return result;
};
