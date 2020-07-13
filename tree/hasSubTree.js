/*
 * @Author: your name
 * @Date: 2020-07-05 16:17:36
 * @LastEditTime: 2020-07-05 16:26:50
 * @LastEditors: Please set LastEditors
 * @Description: 判断一棵树种是否有给定子树
 */

function hasSubTree(pRoot1, pRoot2) {
    let result = false
    if (!pRoot1 && !pRoot2) {
        if (pRoot1.val === pRoot2.val) { // 某节点R相同，遍历以R节点的子树是否相同
            result = doesTree1HasTree2(pRoot1, pRoot2)
        }
        if (!result) { // 否则比较左子树
            result = hasSubTree(pRoot1.left, pRoot2)
        }
        if (!result) { // 否则比较右子树
            result = hasSubTree(pRoot1.right, pRoot2)
        }
    }
    return result
}

function doesTree1HasTree2(pRoot1, pRoot2) {
    if (pRoot2 === null) {
        return true
    }
    if (pRoot1 === null) {
        return false
    }

    if (pRoot1.val !== pRoot2.val) {
        return false
    }
    // 根节点相同，继续分别比较左右子树
    return doesTree1HasTree2(pRoot1.left, pRoot2.left) && doesTree1HasTree2(pRoot1.right, pRoot2.right)
}


 
