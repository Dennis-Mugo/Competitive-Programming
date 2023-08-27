function insertionSort2(n, arr) {
    // Write your code here
    for (let i = 1; i < n; i++) {
        let val = arr[i];
        let j = i;
        while (j > 0 && arr[j - 1] > val) {
            arr[j] = arr[j - 1];
            j--;
        }
        arr[j] = val;
        printArr(arr);
    }

}

function printArr(arr) {
    let txt = "";
    for (let val of arr) {
        txt += val + " ";
    }
    console.log(txt);
}