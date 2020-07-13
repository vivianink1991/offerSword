/*
 * @Author: your name
 * @Date: 2019-03-23 20:32:45
 * @LastEditTime: 2020-06-22 12:26:42
 * @LastEditors: Please set LastEditors
 * @Description: 挖坑填坑法+分治思想
 * @FilePath: /offerSword/sort/quickSort.js
 */ 
// 方法一
function quickSort(arr) {
    if (arr === null || arr.length <= 1) {
        return arr;
    }
    var targetIndex = Math.floor((0 + arr.length - 1) / 2);
    var target = arr.splice(targetIndex, 1)[0];

    var left = [];
    var right = [];
    for(var i = 0; i < arr.length; i++) {
        if (arr[i] < target) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return quickSort(left).concat([target], quickSort(right));
}

// 方法二
function partion(arr, left, right) {
    var i = left;
    var j = right;
    var target = arr[left];

    while(i < j) {
        while(i < j && arr[j] >= target) {
            j--;
        }
        if (i < j) {
            arr[i] = arr[j];
            i++;
        }
        while(i < j && arr[i] < target) {
            i++;
        }
        if (i < j) {
            arr[j] = arr[i];
            j--;
        }
    }
    arr[i] = target;
    return i;
}

function quickSort2(arr, left, right) {
    if (left < right) {
        var splitIndex = partion(arr, left, right);
        quickSort2(arr, left, splitIndex - 1);
        quickSort2(arr, splitIndex + 1, right);
    }
}

// 方法三 将partion合并写入
function quickSort3(arr, l, r) {
    if (l < r) { // 递归推出条件：只剩一个元素
        let i = l
        let j = r
        let target = arr[l]

        while(i < j) {
            while(i < j && arr[j] >= target) {
                j--
            }
            if (i < j) {
                arr[i] = arr[j]
                i++
            }
            while(i < j && arr[i] < target) {
                i++
            }
            if (i < j) {
                arr[j] = arr[i]
                j--
            }
        }

        arr[i] = target

        quickSort3(arr, l, i - 1)
        quickSort3(arr, i + 1, r)
    }
}

var arr = [18, 2, 17, 6, 3, 10, 8, 1];
quickSort2(arr, 0, arr.length - 1);
console.log(arr);

/*
整体思路：
1．先从数列中取出一个数作为基准数。
2．分区过程，将比这个数大的数全放到它的右边，小于或等于它的数全放到它的左边。
3．再对左右区间重复第二步，直到各区间只有一个数。
*/

/*
每层递归思路：
1．i =L; j = R; 将基准数挖出形成第一个坑a[i]。
2．j--由后向前找比它小的数，找到后挖出此数填前一个坑a[i]中。
3．i++由前向后找比它大的数，找到后也挖出此数填到前一个坑a[j]中。
4．再重复执行2，3二步，直到i==j，将基准数填入a[i]中。
*/

