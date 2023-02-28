function uniq(a) {
    var seen = {};
    return a.filter(function(item) {
        return seen.hasOwnProperty(item) ? false : (seen[item] = true);
    });
}

const prettyPrint = (node, prefix = '', isLeft = true) => {
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
  }
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.value}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
  }
}

function merge(left, right) {
    let arr = [];
    while (left.length !== 0 && right.length !== 0) {
        if (left[0] < right[0]) {
            arr.push(left.shift());
        } else {
            arr.push(right.shift());
        }
    }
    return [...arr, ...left, ...right];
}

function mergesort(unsortedArr) {
    const len = unsortedArr.length;
    const middle = len / 2;
    if (len <= 1) {
        return unsortedArr;
    } 
    const left = unsortedArr.slice(0, middle);
    const right = unsortedArr.slice(middle);

    const sortedleft = mergesort(left);
    const sortedright = mergesort(right);

    return merge(sortedleft, sortedright);
}

module.exports.mergesort = mergesort;
module.exports.prettyPrint = prettyPrint;
module.exports.uniq = uniq;