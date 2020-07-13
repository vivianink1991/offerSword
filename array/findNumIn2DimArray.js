/*
 * @Author: your name
 * @Date: 2020-06-22 18:11:16
 * @LastEditTime: 2020-06-22 18:20:39
 * @LastEditors: Please set LastEditors
 * @Description: 在排序的二维数组中查找给定数字是否存在。从左到右，从上到下数字依次增大
 */ 

 // 从右上角(所在行最大，所在列最小)或者左下角(所在列最大，所在行最小)开始查找，可剔除某列/行，缩小查找范围
function find(arr, num) {
    if (!arr || arr.length === 0) {
        return false
    }
    let found = false
    let rows = arr.length
    let columns = arr[0].length

    let i = 0
    let j = columns - 1

    while(i < rows && j >= 0) {
        if (num === arr[i][j]) {
            found = true
            break
        } else if (num < arr[i][j]) {
            j--
        } else {
            i++
        }
    }
    return found
}

var arr = []
arr.push([1, 2, 8, 9])
arr.push([2, 4, 9, 12])
arr.push([4, 7, 10, 13])
arr.push([6, 8, 11, 15])

console.log(find(arr, 7))
