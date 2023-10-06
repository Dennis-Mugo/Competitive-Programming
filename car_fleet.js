var carFleet = function(target, position, speed) {
    let pair = position.map((_, i) => [position[i], speed[i]]);
    pair.sort((a, b) => b[0] - a[0]);
    let stack = [];
    for (let item of pair) {
        stack.push((target - item[0]) / item[1]);
        let n = stack.length;
        if (stack.length >= 2 && stack[n-1] <= stack[n-2]) {
            stack.pop();
        }
    }
    return stack.length;
};
