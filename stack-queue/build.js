/*
 * @Author: your name
 * @Date: 2020-06-26 17:54:51
 * @LastEditTime: 2020-06-26 18:31:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 */

 // 用两个栈模拟队列

function myQueue() {
    let stack1 = []
    let stack2 = []

    function appendTail(val) {
        stack1.push(val)
    }

    function deleteHead() {
        if (stack2.length <= 0) {
            while(stack1.length) {
                stack2.push(stack1.pop())
            }
        }
        if (stack2.length === 0) {
            return
        }
        return stack2.pop()
    }

    return {
        appendTail,
        deleteHead
    }
}

// const queue1 = myQueue()
// queue1.appendTail(1)
// queue1.appendTail(2)
// console.log(queue1.deleteHead())

// const queue2 = myQueue()
// queue2.appendTail(3)
// queue2.appendTail(4)
// console.log(queue2.deleteHead())

// console.log(queue1.deleteHead())

// 用两个队列模拟栈
function myStack() {
    let queue1 = []
    let queue2 = []

    function push(val) {
        if (queue2.length) {
            queue2.push(val)
        } else {
            queue1.push(val)
        }
    }

    function pop() {
        if (queue1.length >= 1) {
            while(queue1.length > 1) {
                queue2.push(queue1.shift())
            }
            return queue1.shift()
        }
        if (queue2.length >= 1) {
            while(queue2.length > 1) {
                queue1.push(queue2.shift())
            }
            return queue2.shift()
        }
    }

    return {
        push,
        pop
    }
}

const stack1 = myStack()
stack1.push(1)
stack1.push(2)
stack1.push(3)
console.log(stack1.pop())
console.log(stack1.pop())
console.log(stack1.pop())

const stack2 = myStack()
stack2.push(4)
stack2.push(5)
stack2.push(6)
console.log(stack2.pop())
console.log(stack2.pop())
console.log(stack2.pop())
