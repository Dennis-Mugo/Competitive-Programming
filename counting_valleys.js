function countingValleys(steps, path) {
    let level = 0;
    let numValleys = 0;
    for (let step of path) {
        if (step == "D" && level == 0) {
            numValleys++;
        }
        level += step == "D" ? -1 : 1;
    }
    return numValleys;
}
