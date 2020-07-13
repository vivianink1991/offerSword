/*
 * @Author: your name
 * @Date: 2020-07-05 15:47:14
 * @LastEditTime: 2020-07-05 15:50:29
 * @LastEditors: Please set LastEditors
 * @Description: 反转链表
 */

function reverseList(pHead) {
    if (pHead === null) {
        return null
    }

    let pPrev = null
    let pNode = pHead
    let pReverseHead = null
    
    while(!pNode) {
        let pNext = pNode.pNext
        if (pNext === null) {
            pReverseHead = pNode
        }

        pNode.next = pPrev
        pPrev = pNode
        pNode = pNext
    }

    return pReverseHead
}
