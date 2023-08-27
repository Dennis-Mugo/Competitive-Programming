function insertionSort1(n, arr) {
    // Write your code here
    let val = arr[n - 1];
    let j = n - 2;
    while (j >= 0 && arr[j] > val) {
        arr[j + 1] = arr[j];
        printArray(arr);
        j--;
    }
    arr[j+1] = val;
    printArray(arr);

}

function printArray(arr) {
    let txt = "";
    for (let val of arr) {
        txt += val + " ";
    }
    console.log(txt);
}