/*
 * @Author: your name
 * @Date: 2020-06-22 10:29:02
 * @LastEditTime: 2020-06-22 10:53:21
 * @LastEditors: Please set LastEditors
 * @Description: 每轮遍历将相邻两个元素正序，一轮遍历后最大元素沉底或最小元素浮顶
 * @FilePath: /offerSword/sort/bubble.js
 */ 

function bubbleSort(arr) {
    let len = arr.length
    for (let i = 0; i < len - 1; i++) {
        let flag = true
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j+1]) {
                let temp = arr[j+1]
                arr[j+1] = arr[j]
                arr[j] = temp
                flag = false
            }
        }
        if (flag) {
        break
        }
    }
    return arr
}

let arr = [5, 18, 3, 1, 20, 9, 80]
let res = bubbleSort(arr)
console.log(res)