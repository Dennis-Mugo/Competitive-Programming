/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let n = temperatures.length;
    let stack = [];
    let answer = Array(n).fill(0);
    for (let i = 0; i < temperatures.length; i++) {
        let temp = temperatures[i];
        while (stack.length && temp > stack[stack.length - 1][0]) {
            let [t, ind] = stack.pop();
            answer[ind] = i - ind;
        }
        stack.push([temp, i]);
    }
    return answer;
};
