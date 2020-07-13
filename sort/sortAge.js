/*
 * @Author: your name
 * @Date: 2020-07-02 10:29:06
 * @LastEditTime: 2020-07-02 10:39:58
 * @LastEditors: Please set LastEditors
 * @Description: 对一个数组进行排序，数组元素大小在0-99之间(如年龄排序)，要求时间复杂度在O(n)，可借助额外空间O(n)
 */

/**
 * 分析：传统排序算法达不到O(n)，数组元素大小范围已知，借助空间换时间
 * @param {*} ages 输入的年龄数组 
 */
function sortAge(ages) {
    let timesOfAge = []
    let i
    for (i = 0; i < 100; i++) {
        timesOfAge[i] = 0
    }

    for (i = 0; i < ages.length; i++) {
        timesOfAge[i] = timesOfAge[i] + 1 // 统计年龄为i出现的次数
    }

    let counter = 0 // 累计下标
    for (i = 0; i < 100; i++) {
        for (let j = 0; j < timesOfAge[i]; j++) {
            ages[counter] = i
            counter++
        }
    }
    return ages
}
