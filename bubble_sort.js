function countSwaps(a) {
    // Write your code here
    let numSwaps = 0;
    let n = a.length;
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - 1; j++) {
            if (a[j] > a[j+1]) {
                let temp = a[j];
                a[j] = a[j + 1];
                a[j + 1] = temp;
                numSwaps+=1;
            }
            
        }
    }
    console.log("Array is sorted in " + numSwaps + " swaps.");
    console.log("First Element: " + a[0]);
    console.log("Last Element: " + a[n - 1]);
}