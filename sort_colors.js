var sortColors = function(nums) {
    let countArr = [0, 0, 0];
    for (let num of nums) {
        countArr[num]++;
    }
    let countNum = countArr[0];
    let countInd = 0;
    for (let i = 0; i < nums.length; i++) {
        while (countNum == 0) {
            countInd++;
            countNum = countArr[countInd];
        }
        nums[i] = countInd;
        countNum--;
    }
};