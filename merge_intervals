var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    let res = [intervals[0]];
    for (let i = 1; i < intervals.length; i++) {
        let resLen = res.length - 1;
        let [start, end] = intervals[i];
        if (start <= res[resLen][1]) {
            res[resLen][1] = Math.max(res[resLen][1], end);
        } else {
            res.push(intervals[i]);
        }
    }
    return res;
};
