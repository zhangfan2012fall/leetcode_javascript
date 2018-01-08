/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var complexNumberMultiply = function(a, b) {
    var aNums = a.split('+');
    var bNums = b.split('+');
    aNums = aNums.map(nums => parseInt(nums));
    bNums = bNums.map(nums => parseInt(nums));

    var num1 = aNums[0] * bNums[0] - aNums[1] * bNums[1];
    var num2 = aNums[1] * bNums[0] + aNums[0] * bNums[1];

    var ret = "";
    ret += num1 + '+';
    ret += num2 + 'i';
    return ret;
};

module.exports = complexNumberMultiply;