/*
 * @Author: your name
 * @Date: 2020-06-26 10:56:45
 * @LastEditTime: 2020-06-26 11:46:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /offerSword/test.js
 */
// let obj = {
//     name: 'lily',
//     age: 10
// }
// let proxy = new Proxy(obj, {
//     get: function(target, propKey) {
//         console.info('get', propKey)
//         return target[propKey]
//     },
//     set: function(target, propKey, value) {
//         console.info('set', propKey)
//         return target[propKey] = value
//     }
// })

// proxy.name = 'anna'
// console.log(proxy.name)

var obj = {
    name: 'lily',
    age: 10
}
for (let i of obj) {
    console.log(i)
}
