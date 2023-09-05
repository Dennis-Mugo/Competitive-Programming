var largestNumber = function(nums) {
    nums = nums.map(num => num.toString());
    nums.sort((num1, num2) => {
        if (num1 + num2 > num2 + num1) {
            return -1;
        } else {
            return 1;
        }
    });
    if (parseInt(nums.join('')) == 0) {
        return "0";
    } else {
        return nums.join('');
    }
};
