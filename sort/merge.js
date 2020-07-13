/*
 * @Author: your name
 * @Date: 2020-06-22 14:46:36
 * @LastEditTime: 2020-06-22 14:48:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /offerSword/sort/merge.js
 */ 

function mergeSort(arr) {  // 采用自上而下的递归方法
    var len = arr.length;
    if(len <= 1) {
        return arr;
    }
    var middle = Math.floor(len / 2),
        left = arr.slice(0, middle),
        right = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    var result = [];

    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    while (left.length)
        result.push(left.shift());

    while (right.length)
        result.push(right.shift());

    return result;
}

let arr = [5, 18, 3, 1, 20, 9, 80]
let res = mergeSort(arr)
console.log(res)




