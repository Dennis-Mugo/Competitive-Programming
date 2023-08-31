var smallerNumbersThanCurrent = function(nums) {
    let res = [];
    let sortedNums = [...nums];
    sortedNums.sort((a, b) => a - b);
    let prev = -1;
    
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        let current = sortedNums[i];
        if (current != prev) {
            prev = current;
            map[current] = i;
        }    
    }
    
    for (let i = 0; i < nums.length; i++) {
        res[i] = map[nums[i]]; 
    }
    return res;
};