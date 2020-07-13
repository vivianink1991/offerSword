/*
 * @Author: your name
 * @Date: 2020-06-23 11:12:29
 * @LastEditTime: 2020-06-23 11:27:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /offerSword/throttle-debounce.js
 */ 

function throttle(cb, wait) {
    let lastTime = 0
    return function() {
        let now = Date.now()
        if (now - lastTime >= wait) {
            lastTime = now
            cb.apply(this, [...arguments])
        }
    }
}

function debounce(cb, delay) {
    let timer = null
    return function() {
        timer && clearTimeout(timer)
        timer = setTimeout(() => {
            cb.apply(this, [...arguments])
        }, delay)
    }
}