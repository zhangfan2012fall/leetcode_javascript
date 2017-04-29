
var Algo = require('./' + process.argv[2]);
var TestCases = require('./' + process.argv[3]);
var assert = require('assert');


var testCases = TestCases().input;
var results   = TestCases().result;

var result;
var testCase;
var testResult;

var testPassed = testCases.length;

var printWrongAnswer = function() {
  console.log('Wrong Answer at test case ', i+1, ':');
  console.log('Expected Result: ', JSON.stringify(result));
  console.log('Returned Result: ', JSON.stringify(testResult));
  console.log('\n');
};

console.log('Running tests of ', process.argv[2],
            ' with test cases:', process.argv[3]);

for (var i = 0; i < testCases.length; i++) {
  testCase = testCases[i];
  result = results[i];

  var testResult = Algo.apply(this, testCase);

  try {
    assert.deepEqual(testResult, result);
  }
  catch(e) {
    testPassed--;
    printWrongAnswer(i, testResult, result);
  }
};

console.log(testPassed + '/' + testCases.length + ' test cases passed!');
