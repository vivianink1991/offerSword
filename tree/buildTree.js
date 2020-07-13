/**
 * @description: 根据前序遍历和中序遍历构建树
 * @param {Array} preOrder: 前序遍历
 * @param {Array} inOrder: 中序遍历
 * @return: {Object} 根节点
 */

/**
1. 根据前序确定根节点，在中序中找到根节点，左侧为左子树，右侧为右子树，再把前序中的左子树和右子树确定
2. 分别对左右子树的前序和中序递归第应用1
*/
function TreeNode(val, left, right) {
    this.val = val || '';
    this.left = left || null;
    this.right = right || null;
}

function buildTree(preOrder, inOrder) {
    if (preOrder === null || inOrder === null || preOrder.length === 0 || inOrder.length === 0) {
        return null;
    }
    var rootVal = preOrder[0];
    var rootNode = new TreeNode(rootVal, null, null);

    var rootIndexIn = inOrder.indexOf(rootVal);

    var leftTreeIn = inOrder.slice(0, rootIndexIn);
    var leftTreePre = preOrder.slice(1, leftTreeIn.length + 1);

    var rightTreeIn = inOrder.slice(rootIndexIn + 1);
    var rightTreePre = preOrder.slice(leftTreePre.length + 1);

    if (leftTreePre.length === 1) {
        rootNode.left = new TreeNode(leftTreePre[0], null, null);
    } else if (leftTreePre.length > 1) {
        rootNode.left = buildTree(leftTreePre, leftTreeIn);
    }

    if (rightTreePre.length === 1) {
        rootNode.right = new TreeNode(rightTreePre[0], null, null);
    } else if (rightTreePre.length > 1) {
        rootNode.right = buildTree(rightTreePre, rightTreeIn);
    }    

    return rootNode;
}

var preOrder = [1, 2, 4, 7, 3, 5, 6, 8];
var inOrder = [4, 7, 2, 1, 5, 3, 8, 6];

var rootNode1 = buildTree(preOrder, inOrder);

function preOrderSearch(rootNode) {
    if(rootNode) {
        console.log(rootNode.val);
        preOrderSearch(rootNode.left);
        preOrderSearch(rootNode.right);
    }
}
function inOrderSearch(rootNode) {
    if(rootNode) {
        inOrderSearch(rootNode.left);
        console.log(rootNode.val);
        inOrderSearch(rootNode.right);
    } 
}
function postOrderSearch(rootNode) {
    if(rootNode) {
        postOrderSearch(rootNode.left);
        postOrderSearch(rootNode.right);
        console.log(rootNode.val);
    } 
}
preOrderSearch(rootNode1);
console.log('**************');
inOrderSearch(rootNode1);

/**
 * @description: 根据后序遍历和中序遍历构建树
 * @param {Array} postOrder: 后序遍历
 * @param {Array} inOrder: 中序遍历
 * @return: {Object} 根节点
 */

function buildTreeByInPost(postOrder, inOrder) {
    if (postOrder === null || inOrder === null || postOrder.length === 0 || inOrder.length === 0) {
        return null
    }

    let rootVal = postOrder[postOrder.length - 1]
    let rootNode = new TreeNode(rootVal, null, null)

    let rootIndexIn = inOrder.indexOf(rootVal)

    let leftTreeIn = inOrder.slice(0, rootIndexIn)
    let rightTreeIn = inOrder.slice(rootIndexIn + 1)

    let leftTreePost = postOrder.slice(0, leftTreeIn.length)
    let rightTreePost = postOrder.slice(leftTreePost.length, postOrder.length - 1)

    if (leftTreePost.length > 1) {
        rootNode.left = buildTreeByInPost(leftTreePost, leftTreeIn)
    } else if (leftTreePost.length === 1) {
        rootNode.left = new TreeNode(leftTreePost[leftTreePost.length - 1])
    }

    if (rightTreePost.length > 1) {
        rootNode.right = buildTreeByInPost(rightTreePost, rightTreeIn)
    } else if(rightTreePost.length === 1) {
        rootNode.right = new TreeNode(rightTreePost[rightTreePost.length - 1])
    }

    return rootNode
}

const postOrder1 = [2, 1, 6, 9, 3, 5]
const inOrder1 = [6, 2, 1, 5, 3, 9]

const root1 = buildTreeByInPost(postOrder1, inOrder1)

postOrderSearch(root1)
console.log('*************')
inOrderSearch(root1)



