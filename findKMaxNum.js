/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    if (k > nums.length || nums === null || nums.length === 0) {
        return;
    }
    var map = {};
    var uniqueArr = [];
    for(var i = 0; i < nums.length; i++) {
        var num = nums[i];
        if (map[num] === undefined) {
            map[num] = true;
            uniqueArr.push(num);
        }
    }
    
    var split = partion(uniqueArr, 0, uniqueArr.length - 1);
    while(split !== k - 1) {
        if (split < k - 1) {
            split = partion(uniqueArr, split + 1, uniqueArr.length - 1);
        }
        if (split > k - 1) {
            split = partion(uniqueArr, 0, split - 1);
        }
    }
    
    return uniqueArr[k-1];
};

function partion(nums, left, right) {
    var i = left;
    var j = right;
    var target = nums[left];
    
    while(i < j) {
        while(i < j && nums[j] <= target) {
            j--;
        }
        if (i < j) {
            nums[i] = nums[j];
            i++;
        }
        while(i < j && nums[i] > target) {
            i++;
        }
        if (i < j) {
            nums[j] = nums[i];
        }
    }
    nums[i] = target;
    return i;
}

var arr = [3,2,3,1,2,4,5,5,6];
