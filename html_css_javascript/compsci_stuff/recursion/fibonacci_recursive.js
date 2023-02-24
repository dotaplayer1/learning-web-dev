// fibonacci sequence implemented recursively
function fibs_recursive(n, arr = [0, 1]) {
    let len = arr.length;
    if (len >= n) {
        return arr;
    }
    let x = arr[len - 1] + arr[len - 2];
    arr.push(x);
    return(fibs_recursive(n, arr));
}

console.log(fibs_recursive(0));
console.log(fibs_recursive(1));
console.log(fibs_recursive(2));
console.log(fibs_recursive(3));
console.log(fibs_recursive(4));
console.log(fibs_recursive(5));
console.log(fibs_recursive(6));
console.log(fibs_recursive(7));
console.log(fibs_recursive(8));
