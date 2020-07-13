/*
 * @Author: your name
 * @Date: 2020-07-11 12:08:04
 * @LastEditTime: 2020-07-11 12:22:15
 * @LastEditors: Please set LastEditors
 * @Description: 镜像翻转树
 */ 

const {levelTraverse, Node} = require('./traverse.js')

// 递归
function mirrorTreeRecursively(root) {
    if (!root) {
        return
    }
    if (root.left === null && root.right === null) { // 到叶节点
        return
    }
    let temp = root.left
    root.left = root.right
    root.right = temp
    
    if (root.left) {
        mirrorTreeRecursively(root.left)
    }
    if (root.right) {
        mirrorTreeRecursively(root.right)
    }
}

// 非递归，用队列实现广度优先遍历
function mirrorTree(root) {
    if (!root) {
        return
    }
    let queue = []
    queue.push(root)

    while(queue.length) {
        let pNode = queue.shift()
        let temp = pNode.left
        pNode.left = pNode.right
        pNode.right = temp

        if (pNode.left) {
            queue.push(pNode.left)
        }
        if (pNode.right) {
            queue.push(pNode.right)
        }
    }
}

let root = new Node('A')
let lf1 = new Node('B')
let rt1 = new Node('C')
let lf2 = new Node('D')
let rt2 = new Node('E')

lf1.left = lf2
lf1.right = rt2
root.left = lf1
root.right = rt1

levelTraverse(root)
console.log('*****************')
mirrorTree(root)
levelTraverse(root)

