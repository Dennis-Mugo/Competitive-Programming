var targetIndices = function(nums, target) {
    nums.sort((a, b) => a - b);
    let res = [];
    console.log(nums);
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == target) {
            res.push(i);
        }
    }
    return res;
};