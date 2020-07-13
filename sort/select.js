/*
 * @Author: your name
 * @Date: 2020-06-22 10:47:13
 * @LastEditTime: 2020-06-22 11:03:57
 * @LastEditors: Please set LastEditors
 * @Description: 每次遍历选择最小的放到第i个位置
 * @FilePath: /offerSword/sort/select.js
 */
 
function selectSort(arr) {
    let len = arr.length
    let minIndex
    let temp
    for (let i = 0; i < len - 1; i++) {
        minIndex = i
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }
        temp = arr[i]
        arr[i] = arr[minIndex]
        arr[minIndex] = temp
    }
    return arr
}

let arr = [5, 18, 3, 1, 20, 9, 80]
let res = selectSort(arr)
console.log(res)

