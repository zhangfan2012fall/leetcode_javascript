/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
    // if deadEnds includes 0000 return -1;
    if (deadends.includes('0000')) {
        return -1;
    }
    if (target === '0000') {
        return 0;
    }
    var visitedNums = new Set();
    visitedNums.add('0000');
    var queue = [];
    var steps = 0;

    // queue target
    queue.push('0000');
    while(queue.length) {
        steps++;
        var size = queue.length;
        // bfs from 0 to size
        for (var i = 0; i < size; i++) {
            var number = queue.shift();
            visitedNums.add(number);
            for (var numIndex = 0; numIndex < 4; numIndex++) {
                for (var shiftNum = -1; shiftNum <= 1; shiftNum+=2) {
                    var temp = number;
                    temp = temp.slice(0, numIndex) + ((temp[numIndex] - '0' + shiftNum + 10)%10 + '') + temp.slice(numIndex + 1);

                    if (temp === target) return steps;
                    if (deadends.includes(temp) || visitedNums.has(temp)) continue;

                    visitedNums.add(temp);
                    queue.push(temp);
                }
            }
        }
    }
    return -1;
    // change the code and queue
    // if is target return steps
};
module.exports = openLock;