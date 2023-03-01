const { uniq, mergesort, prettyPrint } = require("./qualityOfLifeFunctions");

function Node(value = null, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
}

function binarySearchTree(sortedArr) {
    // takes in a sorted array and converts it into a binary tree
    this.buildTree = function(arr, start = 0, end = arr.length - 1) {
        if (start > end) return null;
        let mid = Math.floor((start + end) / 2); 
        let node = new Node(arr[mid]);
        node.left = this.buildTree(arr, start, mid - 1);
        node.right = this.buildTree(arr, mid + 1, end);
        return node;
    }

    this.root = this.buildTree(sortedArr);

    this.insert = function(value ,currentNode = this.root) {
        if (value === currentNode.value) {
            console.log("Value already exists");
            return null;
        }
        if (value > currentNode.value) {
            if (currentNode.right !== null) {
                this.insert(value, currentNode.right);
            } else {
                currentNode.right = new Node(value);
            }
        } else {
            if (currentNode.left !== null) {
                this.insert(value, currentNode.left);
            } else {
                currentNode.left = new Node(value);
            }
        }
    }
    
    this.minVal = function(currentNode) {
        while (currentNode.left !== null) {
            currentNode = currentNode.left;
        }
        return currentNode;
    } 

    this.deleteVal = function(value, currentNode = this.root) {
        if (currentNode === null) return null;
        if (value > currentNode.value) {
            currentNode.right = this.deleteVal(value, currentNode.right);
        } else if (value < currentNode.value) {
            currentNode.left = this.deleteVal(value, currentNode.left);
        } else {
            if (currentNode.left === null && currentNode.right === null) {
                currentNode = null;
            } else if (currentNode.left === null) {
                currentNode = currentNode.right;
            } else if (currentNode.right === null) {
                currentNode = currentNode.left;
            } else {
                let temp = this.minVal(currentNode.right);
                currentNode.value = temp.value;
                currentNode.right = this.deleteVal(temp.value, currentNode.right);
            }
        }
        return currentNode;
    }


    this.find = function(value, currentNode = this.root) {
        if (value === currentNode.value) {
            return currentNode;
        }
        if (value > currentNode.value) {
            if (currentNode.right === null) {
                return false;
            } else {
                return this.find(value, currentNode.right);
            }
        } else {
            if (currentNode.left === null) {
                return false;
            } else {
                return this.find(value, currentNode.left);
            }
        }
    }

    this.levelOrderTraversal = function(nodeValues = []) {
        let queue = [];
        if (this.root === null) {
            return null;
        }
        queue.push(this.root);
        while (queue.length !== 0) {
            currentNode = queue.shift();
            if (currentNode.left !== null) queue.push(currentNode.left);
            if (currentNode.right !== null) queue.push(currentNode.right);
            nodeValues.push(currentNode.value);
        }
        return nodeValues;
    }

    // root left then right
    this.preOrderTraversal = function(currentNode = this.root, nodeValues = []) {
        if (currentNode === null) return;
        nodeValues.push(currentNode.value);
        this.preOrderTraversal(currentNode.left, nodeValues);
        this.preOrderTraversal(currentNode.right, nodeValues);
        return(nodeValues);
    }
    // left root then right
    this.inOrderTraversal = function(currentNode = this.root, nodeValues = []) {
        if (currentNode === null) return;
        this.inOrderTraversal(currentNode.left, nodeValues);
        nodeValues.push(currentNode.value);
        this.inOrderTraversal(currentNode.right, nodeValues);
        return(nodeValues);
    }
    //left right then root
    this.postOrderTraversal = function(currentNode = this.root, nodeValues = []) {
        if (currentNode === null) return;
        this.postOrderTraversal(currentNode.left, nodeValues);
        this.postOrderTraversal(currentNode.right, nodeValues);
        nodeValues.push(currentNode.value);
        return(nodeValues);
    }
    
    this.height = function(currentNode = this.root) {
        if (currentNode === null) return 0;
        let leftHeight = this.height(currentNode.left);
        let rightHeight = this.height(currentNode.right);
        if (leftHeight > rightHeight) {
            return (leftHeight + 1);
        } else {
            return (rightHeight + 1);
        } 
    }
    
    this.isBalanced = function() {
        if (this.root === null) return true;
        let rightHeight = this.height(this.root.right);
        let leftHeight = this.height(this.root.left);
        let heightDiff = rightHeight - leftHeight;
        if (heightDiff === 1 || heightDiff === -1 || heightDiff === 0) return true;
        return false;
    }
    
    this.rebalance = function() {
        if (this.isBalanced === true) {
            return;
        }
        let treeArr = this.inOrderTraversal();
        this.root = this.buildTree(treeArr);
    }
}

let arr1 = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
arr1 = mergesort(uniq(arr1));
let binaryTree1 = new binarySearchTree(arr1)
prettyPrint(binaryTree1.root);
console.log();
let binaryTree2 = new binarySearchTree([1, 2, 3, 4, 5, 6, 7]);
binaryTree2.insert(20);
binaryTree2.insert(18);
binaryTree2.insert(19);
binaryTree2.insert(40);
binaryTree2.insert(80);
prettyPrint(binaryTree2.root);
console.log(binaryTree2.isBalanced());
binaryTree2.rebalance();
console.log(binaryTree2.isBalanced());
prettyPrint(binaryTree2.root);
console.log();
console.log();
binaryTree2.deleteVal(4);
prettyPrint(binaryTree2.root);
// console.log(binaryTree1.isBalanced());
// console.log(binaryTree2.find(69));
// console.log(binaryTree2.find(9));
// console.log(binaryTree2.find(6));
// console.log(binaryTree2.levelOrderTraversal());
// console.log(binaryTree1.levelOrderTraversal());
// console.log(binaryTree2.inOrderTraversal());
// console.log(binaryTree2.preOrderTraversal());
// console.log(binaryTree2.postOrderTraversal());
// console.log(binaryTree2.height());
// console.log(binaryTree1.height());

module.exports = binarySearchTree;