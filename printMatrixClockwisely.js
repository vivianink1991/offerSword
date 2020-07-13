/*
 * @Author: your name
 * @Date: 2020-07-11 12:23:13
 * @LastEditTime: 2020-07-11 12:38:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 */ 
/**
 * 顺时针环形打印矩阵
 * @param {*} arr 
 * @param {*} columns 
 * @param {*} rows 
 */
function printMatrixClockwisely(arr, columns, rows) {
    if (arr === null || columns <= 0 || rows <= 0) {
        return
    }
    let start = 0 // 起始行号列号相同
    while (columns > start * 2 && rows > start * 2) {
        printMatrixInCircle(arr, columns, rows, start)
        start++
    }
}

function printMatrixInCircle(arr, columns, rows, start) {
    let endX = columns - 1 - start // 横坐标
    let endY = rows - 1 - start // 纵坐标

    // 第一行一定会被打印
    for (let i = start; i <= endX; i++) {
        console.log(arr[start][i])
    }

    // 从上到下打印列：至少两行，即终止行大于起始行
    if (endY > start) {
        for (let i = start + 1; i <= endY; i++) {
            console.log(arr[i][endX])
        }
    }

    // 从右向左打印行：至少两行两列
    if (endX > start && endY > start) {
        for (let i = endX - 1; i >= start; i--) {
            console.log(arr[endY][i])
        }
    }

    // 从下往上打印列：至少三行两列
    if (endY - 1> start && endX > start) {
        for (let i = endY - 1; i > start; i--) {
            console.log(arr[i][start])
        }
    }
}