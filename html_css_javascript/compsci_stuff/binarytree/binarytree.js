const { uniq, mergesort, prettyPrint } = require("./qualityOfLifeFunctions");

function Node(value = null, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
}

function binaryTree(sortedArr) {
    // takes in a sorted array and converts it into a binary tree
    this.buildTree = function(arr, start, end) {
        if (start > end) return null;
        let mid = parseInt((start + end) / 2); 
        let node = new Node(arr[mid]);
        node.left = this.buildTree(arr, start, mid - 1);
        node.right = this.buildTree(arr, mid + 1, end);
        return node;
    }

    this.root = this.buildTree(sortedArr, 0, sortedArr.length - 1);

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
}

let arr1 = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
arr1 = mergesort(uniq(arr1));
let binaryTree1 = new binaryTree(arr1)
prettyPrint(binaryTree1.root);
console.log();
let binaryTree2 = new binaryTree([1, 2, 3, 4, 5, 6, 7]);
prettyPrint(binaryTree2.root);
binaryTree2.insert(20);
prettyPrint(binaryTree2.root);
