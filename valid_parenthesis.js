var isValid = function(s) {
    let open = ['(', '[', '{'];
    let close = [')', ']', '}'];
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        let n = stack.length - 1;
        let br = s[i];
        if (open.includes(br)) {
            stack.push(br);
        } else {
            if (n >= 0 && close.findIndex(a => a === br) === open.findIndex(a => a === stack[n])) {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    return stack.length === 0;
    
};
