/**
 * @param {number[][]} forest
 * @return {number}
 */
var cutOffTree = function(forest) {
    if (forest[0][0] === 0) {
        return -1;
    }
    var trees = [];
    for (let i = 0; i < forest.length; i++) {
        for (let j = 0; j < forest[0].length; j++) {
            if (forest[i][j] > 1) {
                trees.push({x: i, y: j, height: forest[i][j]});
            }
        }
    }
    trees = trees.sort((a, b) => a.height - b.height);
    // console.log('tree = ', trees);
    var steps = 0;
    var startPoint = [0, 0];
    // bfs from lowest to highest.
    for (let i = 0; i < trees.length; i++) {
        // console.log('i = ', i);
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
            // console.log('here?')
            if (elem[0] === tree.x && elem[1] === tree.y) {
                // console.log('steps', steps);
                return steps;
            }
            for (let i = 0; i < 4; i++) {
                // console.log('dir = ', i);
                const nextX = elem[0] + dir[i][0];
                const nextY = elem[1] + dir[i][1];
                if (nextX >= 0 && nextX < forest.length &&

                    nextY >= 0 && nextY < forest[0].length &&
                forest[nextX][nextY] > 0 &&
                !visitedTree[nextX][nextY]) {
                    visitedTree[nextX][nextY] = true;
                    // console.log('push', [nextX, nextY]);
                    q.push([nextX, nextY]);
                }
            }
        }
        steps++;
    }
    // console.log('infinity');
    return Infinity;
}
module.exports = cutOffTree;
