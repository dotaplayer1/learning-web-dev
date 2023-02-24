// fibonacci sequence implemented iteratively

const fibs = num => {
    if (num === 0) {
        return [0];
    }
    if (num === 1) {
        return [0, 1];
    }
    if (num == 2) {
        return [0, 1, 1];
    }
    let fib_arr = [0, 1, 1];
    for (let i = 2; i < num - 1; i++) {
        let len = fib_arr.length;
        let temp = fib_arr[len - 2] + fib_arr[len - 1];
        fib_arr.push(temp);
    } 
    return fib_arr;
} 

console.log(fibs(8));
