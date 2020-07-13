/*
 * @Author: your name
 * @Date: 2020-06-22 18:40:37
 * @LastEditTime: 2020-06-22 18:46:04
 * @LastEditors: Please set LastEditors
 * @Description: 从尾到头打印链表
 */

function printListReverse(pHead) {
    // 先从头到尾遍历链表，存入栈中，再遍历栈(后进先出)
    let pNode = pHead
    let stack = []
    while(pNode) {
        stack.push(pNode.val)
        pNode = pNode.next
    }

    stack.forEach(item => {
        console.log(item)
    })
}
