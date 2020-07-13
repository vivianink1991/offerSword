/*
 * @Author: your name
 * @Date: 2020-06-22 18:30:56
 * @LastEditTime: 2020-07-04 10:08:44
 * @LastEditors: Please set LastEditors
 * @Description: 单项链表中删除某个给定值的节点
 */

function deleteNode(pHead, val) {
    if (pHead === null) {
        return
    }

    if (pHead.val === val) {
        pHead = pHead.next
    } else {
        let pNode = pHead
        while(pNode.next && pNode.next.val !== val) {
            pNode = pNode.next
        }

        if (pNode.next && pNode.next.val === val) {
            pNode.next = pNode.next.next
        }
    }
}

function Node(val) {
    this.val = val
    this.next = null
}

/**
 * 在O(1)时间内删除给定节点
 */
function deleteNode2(pHead, pDeleted) {
    if (!pHead || !pDeleted) {
        return
    }

    if (pDeleted.next) {
        let pNext = pDeleted.next
        pDeleted.val = pNext.val
        pDeleted.next = pNext.next
        pNext = null
    } else if (pHead === pDeleted) { // 只有一个头结点
        pHead = pHead.next
        pDeleted = null
    } else { // 有多个节点且删除的是尾节点 需遍历
        let pNode = pHead
        while (pNode.next !== pDeleted) {
            pNode = pNode.next
        }
        pNode.next = null
        pDeleted = null
    }
}
