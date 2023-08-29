class Solution
{
  select(arr,i){
     // code here such that selectionSort() sorts arr[]
     let smallest = i;
     for (let j = i; j < arr.length; j++) {
         if (arr[j] < arr[smallest]) {
             smallest = j;
         }
     }
     return smallest;
  }

  //Function to sort the array using selection sort algorithm.
  selectionSort(arr,n){
   //code here
   for (let i = 0; i < n; i++) {
       let smallestIndex = this.select(arr, i);
       if (smallestIndex != i) {
           let temp = arr[i];
           arr[i] = arr[smallestIndex];
           arr[smallestIndex] = temp;
       }
   }
   return arr;
  }
    
}
