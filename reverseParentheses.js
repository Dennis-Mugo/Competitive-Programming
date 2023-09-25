var reverseParentheses = function(s) {
    let stack = [];
    for (let str of s) {
        if (str != ')') {
            stack.push(str);
        } else {
            let substr = [];
            while (stack.length > 0) {
                let char = stack.pop();
                if (char != "(") {
                    substr.push(char);
                } else {
                    break;
                }
            }
            stack = stack.concat(substr);
        }
    }
    return stack.join("");
};
