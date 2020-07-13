/**
 * @description: 二维数组每行从左到右递增，每列从上到下递增，函数接受一个数组和数字，查找是否数组中包含该数字 
 * @param {Aarry} arr
 * @param {int} num
 * @return: true
 */
function find(arr, num) {
    var rows = arr.length;
    var colunms = arr[0].length;

    // 从右上角开始查找
    var row = 0;
    var colunm = colunms - 1;
    var isFound = false;
    while (row < rows && colunm >= 0) {
        var curNum = arr[row][colunm];
        if (curNum === num) {
            isFound = true;
            break;
        } else if (num < curNum) {
            colunm = colunm - 1;
        } else {
            row = row + 1;
        }
    }

    return {
        isFound: isFound,
        position: [row, colunm]
    };
}

// 测试用例
var arr = [[1, 2, 8, 9], [2, 4, 9, 2], [4, 7, 10, 13], [6, 8, 11, 15]];

var res = find(arr, 15);
console.log(res);