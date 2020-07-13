/**
 * @description: 二分查找有序数组
 * @param {type} 
 * @return: 
 */
function binarySearch(arr, num) {
    if (arr === null || arr.length === 0) {
        return -1;
    }

    var l = 0;
    var r = arr.length - 1;
    
    while(l <= r) {
        var middleIndex = Math.floor((l + r) / 2);
        if (arr[middleIndex] === num) {
            return middleIndex;
        } else if (num < arr[middleIndex]) {
            r = middleIndex - 1;
        } else {
            l = middleIndex + 1;
        }
    }

    return -1; 
}

var arr = [1,5,8,10,11,20,50,80];
console.log(binarySearch(arr, 10));
