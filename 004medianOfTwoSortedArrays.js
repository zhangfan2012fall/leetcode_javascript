/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    if (nums1.length > nums2.length) {
        var t = nums1;
        nums1 = nums2;
        nums2 = t;
    }
    var lenOfNum1 = nums1.length;
    var lenOfNum2 = nums2.length;

    if (lenOfNum1 === 0) {
        var mid = parseInt(nums2.length/2);
        console.log(mid)
        if (lenOfNum2%2)
            return nums2[mid];
        return (nums2[mid] + nums2[mid-1])/2;
    }

    var searchStart = 0;
    var searchEnd = lenOfNum1;
    var halfLen = Number.parseInt((lenOfNum1 + lenOfNum2 + 1) / 2);

    var num1Cursor;
    var num2Cursor;
    while (searchStart <= searchEnd) {
        num1Cursor = Number.parseInt((searchStart + searchEnd) / 2);
        num2Cursor = halfLen - num1Cursor;

        if (num1Cursor < lenOfNum1 &&
            nums2[num2Cursor - 1] > nums1[num1Cursor]) {

            searchStart = num1Cursor + 1;
        }
        else if (num1Cursor > 0 &&
            nums1[num1Cursor - 1] > nums2[num2Cursor]) {

            searchEnd = num1Cursor - 1;
        }
        else {
            var maxOfLeft;
            var maxOfRight;
            if (num1Cursor == 0) {
                maxOfLeft = nums2[num2Cursor - 1];
            }
            else if (num2Cursor == 0) {
                maxOfLeft = nums1[num1Cursor - 1];
            }
            else {
                maxOfLeft = Math.max(nums1[num1Cursor - 1], nums2[num2Cursor - 1]);
            }

            if ((lenOfNum1 + lenOfNum2)%2 === 1) {
                return maxOfLeft;
            }

            if (num1Cursor == lenOfNum1) {
                maxOfRight = nums2[num2Cursor];
            }
            else if (num2Cursor == lenOfNum2) {
                maxOfRight = nums1[num1Cursor];
            }
            else {
                maxOfRight = Math.min(nums1[num1Cursor], nums2[num2Cursor]);
            }

            return (maxOfRight + maxOfLeft)/2;
        }
    }

};
module.exports = findMedianSortedArrays;