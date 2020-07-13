/*
 * @Author: your name
 * @Date: 2020-06-22 11:05:59
 * @LastEditTime: 2020-06-22 11:16:55
 * @LastEditors: Please set LastEditors
 * @Description: 每轮向有序序列中在正确位置插入未排序元素
 * @FilePath: /offerSword/sort/insert.js
 */ 

 function insertSort(arr) {
     for (let i = 1; i < arr.length; i++) {
         let target = arr[i]
         let preIndex = i - 1
         while(preIndex >= 0 && target < arr[preIndex]) {
            arr[preIndex + 1] = arr[preIndex]
            preIndex--
         }

         arr[preIndex + 1] = target
     }

     return arr
 }

 let arr = [5, 18, 3, 1, 20, 9, 80]
let res = insertSort(arr)
console.log(res)

 
