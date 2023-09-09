var rearrangeArray = function(nums) {
    nums.sort((a, b) => a - b);
    let [l, r] = [0, nums.length - 1];
    let res = [];
    while (res.length != nums.length) {
        res.push(nums[l]);
        l++;
        if (l <= r) {
            res.push(nums[r]);
            r--;
        }
    }
    return res;
};
