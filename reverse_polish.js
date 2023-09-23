var evalRPN = function(tokens) {
    let stack = [];
    let operators = new Set(["+", "-", "*", "/"]);
    for (let token of tokens) {
        if (operators.has(token)) {
            let op1 = stack.pop();
            let op2 = stack.pop();
            if (token == "+") {
                stack.push(op2 + op1);
            } else if (token == "-") {
                stack.push(op2 - op1);
            }else if (token == "*") {
                stack.push(op2 * op1);
            }else if (token == "/") {
                let res = op2 / op1;
                if (res < 0) {
                    stack.push(Math.floor(Math.abs(res)) * -1);
                } else {
                    stack.push(Math.floor(res));
                }
            }
        } else {
            stack.push(parseInt(token));
        }
    }
    return stack[0];
    
};
