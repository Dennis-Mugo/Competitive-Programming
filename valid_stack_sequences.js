/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
    let stack = [];
    let k = 0;
    for (let num of pushed) {
        stack.push(num);
        while (stack.length && popped[k] == stack[stack.length - 1]) {
            k++;
            stack.pop();
        }
    }
    return stack.length == 0;
};
