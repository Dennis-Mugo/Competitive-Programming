function countingSort(arr) {
    // Write your code here
    let n = arr.length;
    let result = Array(100).fill(0);
    for (let i = 0; i < n; i++) {
        let resultIndex = arr[i];
        result[resultIndex]++;
    }
    return result;

}