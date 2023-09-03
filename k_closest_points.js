var kClosest = function(points, k) {
    points.sort((a, b) => getDistance(a) - getDistance(b));
    return points.slice(0, k);
};

const getDistance = (point) => {
    let dx = point[0] - 0;
    let dy = point[1] - 0;
    return Math.pow(dx, 2) + Math.pow(dy, 2);
}
