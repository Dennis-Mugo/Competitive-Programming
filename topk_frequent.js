var topKFrequent = function(nums, k) {
    let map = {};
    for (let num of nums) {
        map[num] = map[num] ? map[num] + 1 : 1;
    }
    let set = [...new Set(nums)];
    set.sort((a, b) => map[b] - map[a]);
    return set.slice(0, k);
};
