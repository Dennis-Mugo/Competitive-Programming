/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    let stack = [];
    for (let digit of num) {
        while (k > 0 && stack.length && stack[stack.length-1] > digit) {
            stack.pop();
            k--;
        }
        stack.push(digit);
    }
    stack = stack.slice(0, stack.length - k);
    let res = stack.join("");
    return res.length ? BigInt(res).toString() : "0";
};
