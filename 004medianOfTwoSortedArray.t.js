var testCases = function () {
  var input = [
    // [nums1,         nums2]
    [[1,2,3,4],        [3, 4, 5, 6,7]],
    [[2,6,10,100],     [44, 66, 88]],

  ];

  var result = [
    4,
    44,
  ]

  return {
    input:  input,
    result: result
  };
}

module.exports = testCases;