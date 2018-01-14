/**
 * @param {number[][]} forest
 * @return {number}
 */
var cutOffTree = function(forest) {
    if (forest[0][0] === 0) {
        return -1;
    }
    let trees = [];
    for (let i = 0; i < forest.length; i++) {
        for (let j = 0; j < forest.length; j++) {
            if (forest[i][j] > 1)
                trees.push({x: i, y: j, height: forest[i][j]});
        }
    }
    trees = trees.sort((a, b) => a.height - b.height);

    var steps = 0;
    var startPoint = [0, 0];
    // bfs from lowest to highest.
    for (let i = 0; i < trees.length; i++) {
        steps += walkingDistance(trees[i], forest, startPoint);
        startPoint = [trees[i].x, trees[i].y];
    }
    return steps === Infinity ? -1: steps;
};

var walkingDistance = function(tree, forest, startPoint) {
    const x = tree.x;
    const y = tree.y;
    var visitedTree = new Array(forest.length);
    for (var i = 0; i < forest.length; i++) {
        visitedTree[i] = new Array(forest[i].length).fill(false);
    }
    return bfs(startPoint[0], startPoint[1], tree, visitedTree, forest);
};

var bfs = function(x, y, tree, visitedTree, forest) {
    const dir = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    var q = [];
    q.push([x, y]);
    visitedTree[x][y] = true;
    var steps = 0;
    while (q.length) {
        var len = q.length;
        while (len--) {
            var elem = q.shift();
            if (elem[0] === tree.x && elem[1] === tree.y) {
                return steps;
            }
            for (let i = 0; i < 4; i++) {
                const nextX = x + dir[i][0];
                const nextY = y + dir[i][1];
                if (nextX >= 0 && nextX < forest.length &&

                    nextY >= 0 && nextY < forest[0].length &&
                   forest[nextX][nextY] > 0 &&
                   !visitedTree[nextX][nextY]) {
                    visitedTree[nextX][nextY] = true;
                    q.push([nextX, nextY]);
                }
            }
        }
        steps++;
    }
    return Infinity;
}
module.exports = cutOffTree;