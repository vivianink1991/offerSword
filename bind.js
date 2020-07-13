/*
 * @Author: your name
 * @Date: 2020-06-23 11:39:44
 * @LastEditTime: 2020-06-23 11:58:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /offerSword/bind.js
 */
Function.prototype.myBind = function(context) {
    if (typeof this !== 'function') {
        throw new TypeError('not a function')
    }
    let args = Array.prototype.slice.call(arguments, 1) // 或者[...arguments].slice(1)
    let _this = this
    let fBound = function() {
       return _this.apply(this instanceof fBound ? this : context, args.concat(...arguments))
    }
    let fNop = function () {}
    fNop.prototype = _this.prototype
    fBound.prototype = new fNop() // 保持_this上旧有的原型链
    return fBound
}

// 补充：apply和call的返回值就是调用它们的函数的返回值


Function.prototype.myCall = function(context) {
    if (typeof this !== 'function') {
      throw new TypeError('Error')
    }
    context = context || window
    context.fn = this
    const args = [...arguments].slice(1)
    const result = context.fn(...args) // 谁调用方法，方法内部的this指向谁
    delete context.fn
    return result
}

Function.prototype.myApply = function(context) {
    if (typeof this !== 'function') {
      throw new TypeError('Error')
    }
    context = context || window
    context.fn = this
    let result
    // 处理参数和 call 有区别
    if (arguments[1]) {
      result = context.fn(...arguments[1])
    } else {
      result = context.fn()
    }
    delete context.fn
    return result
}