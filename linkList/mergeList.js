/*
 * @Author: your name
 * @Date: 2020-07-05 15:55:58
 * @LastEditTime: 2020-07-05 16:00:00
 * @LastEditors: Please set LastEditors
 * @Description: 合并两个有序链表
 */

function mergeList(pHead1, pHead2) {
    if (!pHead1) {
        return pHead2
    } else if (!pHead2) {
        return pHead2
    }

    let pMergedHead = null

    if (pHead2.val < pHead2.val) {
        pMergedHead = pHead1
        pMergedHead.next = mergeList(pHead1.next, pHead2)
    } else {
        pMergedHead = pHead2
        pMergedHead.next = mergeList(pHead1, pHead2.next)
    }

    return pMergedHead
}
