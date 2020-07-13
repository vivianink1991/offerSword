/*
 * @Author: your name
 * @Date: 2020-07-05 15:11:47
 * @LastEditTime: 2020-07-05 15:32:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 */

 /** 查找倒数第K个节点，只遍历一次
  *  倒数第一个节点和倒数第k个节点相差k-1，设置两个指针，当第一个指着指向尾部时，第二个指着刚好指向第k-1个
  *  需注意鲁棒性：1. k为0；2. k大于节点数目
  */
 function findKthToTail(pHead, k) {
    if (!pHead || k === 0) {
        return null
    }
    let pAhead = pHead
    for (let i = 0; i < k - 1; i++) {
        if (pAhead.next) {
            pAhead = pAhead.next
        } else {
            return null
        }
    }

    let pBehind = pHead
    while(pAhead.next) {
        pAhead = pAhead.next
        pBehind = pBehind.next
    }
    
    return pBehind
 }

 /**
  * 查找链表中间节点，如果节点数为奇数，返回中间节点；如果是偶数，返回中间两个的任意一个
  * 同样设置两个指针，快指针每次走两步，慢指针每次走一步；当快指针走到尾部时，慢指针刚好走到中间
  */

function findMiddleNode(pListHead) {
    if (!pListHead) {
        return null
    }
    let pFast = pListHead
    let pSlow = pListHead

    while (pFast.next && pFast.next.next) {
        pFast = pFast.next.next
        pSlow = pSlow.next
    }

    return pSlow
}

/**
 * 判断是否为环形链表
 * 设置快慢两个指针，如果快指针追上了慢指针，则是环形；若快指针在到达尾部没有追上慢指针，则不是环形
 */
function isCircleLink(pHead) {
    if (pHead === null) {
        return false
    }

    let pFast = pHead
    let pSlow = pHead

    while (pFast.next && pFast.next.next) {
        pFast = pFast.next.next
        pSlow = pSlow.next
        if (pFast === pSlow) {
            return true
        }
    }

    return false
}
