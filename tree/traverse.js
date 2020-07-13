/*
 * @Author: your name
 * @Date: 2020-06-22 15:20:54
 * @LastEditTime: 2020-07-11 12:22:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /offerSword/tree/traverse.js
 */ 

function Node(val) {
     this.val = val
     this.left = null
     this.right = null
}

/**
 * 递归
 */
function preOrder(root) {
    if (root) {
        console.log(root.val)
        preOrder(root.left)
        preOrder(root.right)
    }
}

function inOrder(root) {
    if (root) {
        inOrder(root.left)
        console.log(root.val)
        inOrder(root.right)
    }
}

function postOrder(root) {
    if (root) {
        postOrder(root.left)
        postOrder(root.right)
        console.log(root.val)
    }
}

/**
 * 非递归
 */
function preOrderTraverse(root) {
    if (root === null) {
        return
    }
    let stack = [] // 使用栈缓存节点，先进后出
    stack.push(root)
    while(stack.length) {
        const node = stack.pop()
        console.log(node.val)
        if (node.right) {
            stack.push(node.right)
        }
        if (node.left) {
            stack.push(node.left)
        }
    }
}

// 永远先考虑左子树，直到左子树为空才访问根节点
function inOrderTraverse(root) {
    if (root === null) {
        return
    }
    let stack = []
    while(root !== null || stack.length) {
        while(root !== null) {
            stack.push(root)
            root = root.left
        }
        root = stack.pop()
        console.log(root.val)
        root = root.right
    }
}

function postOrderTraverse(root) {
    if (root === null) {
        return
    }
    let stack = []
    let node = root
    let lastVist = null // 标记上一个访问的节点。区分右子树是否访问过
    while(node !== null || stack.length) {
        if (node !== null) { // 访问左子树
            stack.push(node)
            node = node.left
        } else {
            node = stack[stack.length - 1] // 栈顶元素
            if (node.right && node.right !== lastVist) { // 右子树存在且未访问过
                node = node.right
            } else {
                stack.pop()
                console.log(node.val)
                lastVist = node
                node = null // 当前节点可访问说明左右子树均已被访问或为空，当前子树已完全访问，node置null，好访问下一个栈顶元素
            }
        }
    }
}

/**
 * 层次遍历即宽度优先 使用队列(先进先出)
 */
function levelTraverse(root) {
    if (root === null) {
        return
    }

    let queue = []
    queue.push(root)
    while(queue.length) {
        let node = queue.shift()
        console.log(node.val)

        if (node.left) {
            queue.push(node.left)
        }

        if (node.right) {
            queue.push(node.right)
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

// levelTraverse(root)

module.exports = {
    levelTraverse,
    Node
}




