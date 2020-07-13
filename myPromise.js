/*
 * @Author: your name
 * @Date: 2020-06-27 11:14:33
 * @LastEditTime: 2020-06-27 15:22:48
 * @LastEditors: Please set LastEditors
 * @Description: 手写Promise：
 * 1. 异步执行回调通过订阅/发布模式，在then中注册回调；在resolve/reject中通知执行回调
 * 2. then支持链式调用：返回一个新的promise，当前promise回调的返回值作为新promise then方法中回调的入参
 * 3. 支持多次调用then：使用队列存储注册的回调
 */ 

class Promise {
    /**
     * 静态方法，返回一个新的promise实例
     */
    static resolve(any) {
        if (typeof any.then === 'function') {
            return any
        }

        return new Promise((resolve) => {
            resolve(any)
        })
    }
    static reject(any) {
        if (typeof any.then === 'function') {
            return any
        }
        return new Promise((resolve, reject) => {
            reject(any)
        })
    }

    /**
     * 一个变量用于保存当前promise的状态
     */
    _status = 'pending'

    /**
     * 一个变量保存当前Promise的决议结果，作为入参传给then中的回调
     */
    _result

    /**
     * resolve改变promise的状态
     * 保存决议结果(会传给注册的回调函数)
     * 异步执行回调函数
     */
    
    // 两个队列保存then注册的回调
    _successCallback = []
    _errorCallback = []
    
    /**
     * 构造函数接收函数为入参
     * 函数接收实例的resolve/reject函数作为入参，改变当前promise的状态
     * 立即执行传入的函数
     */
    constructor(fn) {
        try {
            fn(this.resolve.bind(this), this.reject.bind(this))
        } catch(e) {
            this.reject(e)
        }
    }

    resolve(ret) {
        if (this._status !== 'pending') {
            throw new Error('重复决议promise')
        }
        this._status = 'fulfilled'
        this._result = ret
        this._runCallbackAsync('success') // 发布
    }

    reject(err) {
        if (this._status !== 'pending') {
            throw new Error('重复决议promise')
        }
        this._status = 'rejected'
        this._result = err
        this._runCallbackAsync('error')
    }

    /**
     * 核心方法：接收两个函数，当promise状态改变时调用对应的回调。实际上是个时间注册器
     * 1. 同一个promise可多次调用then，因此需要一个队列维护注册的回调
     * 2. then支持链式调用，因此then返回一个新的promise。其回调的结果作为新promise的决议结果
     */
    then(onFulfilled, onRejected) {
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v => v // 实现任何回调没有时候的透传
        onRejected = typeof onRejected === 'function' ? onRejected : err => {throw err}
        // 支持链式调用，立即返回一个新的promise
        return new Promise((resolve, reject) => {
            // onFulfilled和onRejected执行的结果作为新promise的决议结果
            const successCb = result => {
                try {
                    resolve(onFulfilled(result))
                } catch(e) {
                    reject(e)
                }
            }

            const errorCb = (e) => {
                try {
                    reject(onRejected(e))
                } catch(err) {
                    reject(err)
                }
            }

            // 回调入队列
            if (this._status !== 'rejected') { // 订阅
                this._successCallback.push(successCb)
            }
            if (this._status !== 'fulfilled') {
                this._errorCallback.push(errorCb)
            }

            // 若promise已经决议，立即执行相应回调
            if (this._status === 'fulfilled') {
                this._runCallbackAsync('success')
            }
            if (this._status === 'rejected') {
                this._runCallbackAsync('error')
            }
        })
    }

    /**
     * 内部方法异步执行注册的回调
     * 通过type区分是执行_successCallback还是_errorCallback
     */
    _runCallbackAsync(type) {
        let eventQueue = []
        if (type === 'error') {
            eventQueue = this._errorCallback
        } else {
            eventQueue = this._successCallback
        }

        // 规范规定回调必须异步执行，使用setTimeout模拟异步
        setTimeout(() => {
            eventQueue.forEach(cb => cb(this._result))
            this._errorCallback.length = 0
            this._successCallback.length = 0
        }, 0)
    }

    catch(fn) {
        return this.then(undefined, fn)
    }
}
