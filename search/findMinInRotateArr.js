/*
 * @Author: your name
 * @Date: 2019-03-24 11:55:10
 * @LastEditTime: 2020-07-02 12:28:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /offerSword/search/006_findMinInRotateArr.js
 */ 
/**
 * @description: 旋转数组中查找最小值，实际上拆分为两个有序子数组。可用二分查找缩小范围，O(logn)
 * @param {number[]} nums 
 * @param {number} target
 * @return {number}
 */
var search = function(nums) {
    if (nums === null || nums.length === 0) {
        return null;
    }
    
    var left = 0;
    var right = nums.length -1;
    var middle = left; // 未进行旋转第一个元素即为最小值
    while(nums[left] >= nums[right]) {
        if (right - left === 1) { // 相差1，即是两个有序子数组right和left指向的相邻
            middle = right;
            break;
        }
        middle = Math.floor((left + right) / 2);
        if (nums[middle] === nums[left] && nums[left] === nums[right]) { // 当left、right、middle都相同时无法判断middle位于哪个子数组，用顺序遍历
            var res = nums[left];
            for (var i = left + 1; i <= right; i++) {
                if (nums[i] <= res) {
                    res = nums[i];
                }
            }
            return res;
        }
        if (nums[middle] >= nums[left]) {
            left = middle;
        } else if (nums[middle] <= nums[right]) {
            right = middle;
        }
    }
    
    return nums[middle];
};

console.log(search([4,5,6,7,0,1,2]));