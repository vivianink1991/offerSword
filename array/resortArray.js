/*
 * @Author: your name
 * @Date: 2020-07-04 21:41:02
 * @LastEditTime: 2020-07-04 21:45:58
 * @LastEditors: 将数组重新分成两个部分：例如让偶数排在奇数的后面
 * @Description: In User Settings Edit
 */

function resortArray(arr, rule) {
    if (!arr || !arr.length) {
        return
    }

    let lf = 0
    let rt = arr.length - 1

    while (lf < rt) {
        while (lf < rt && !rule(arr[lf])) {
            lf++
        }
        while (lf < rt && !rule(arr[rt])) {
            rt--
        }
        if (lf < rt) {
            let temp = arr[lf]
            arr[lf] = arr[rt]
            arr[rt] = arr[lf]
        }
    }
}

function rule(val) {
    return val % 2 === 0
}