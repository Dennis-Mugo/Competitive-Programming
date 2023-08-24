/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents(grades) {
    // Write your code here
    let result = [];
    for (let grade of grades) {
        let offby = 5 - (grade % 5);
        if (grade < 38 || offby >= 3) {
            result.push(grade);
        } else {
            result.push(grade + offby);
        }
    }
    return result;

}