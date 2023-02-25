let x = [2, 1, 3, 4, 5, 9, 8, 6, 7];

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



console.log(mergesort(x));