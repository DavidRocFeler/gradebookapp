/* Step 1
A teacher has finished grading their students' tests and needs your help to calculate the average score for the class.
Complete the getAverage function which takes in an array of test scores and returns the average score.
The average is calculated by adding up all the scores and dividing by the total number of scores.

Example
average = sum of all scores / total number of scores
A couple of function calls have been provided for you so you can test out your code.

Tips
You can use a loop to iterate over the scores array and add up all the scores.
You can use the length property to get the total number of scores.
*/

function getAverage(scores) {
    const sum = scores.reduce((total, score) => total + score, 0);
    return sum / scores.length
}

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));

/*
Step 2
Now the teacher needs your help converting the student score to a letter grade.
Complete the getGrade function that takes a number score as a parameter. Your function should return a string representing a letter grade based on the score.
Here are the scores and their corresponding letter grades:

Score Range	Grade
100	"A++"
90 - 99	"A"
80 - 89	"B"
70 - 79	"C"
60 - 69	"D"
0 - 59	"F"

Tips
Remember that you learned about conditional statements (if, else if, and else).
Remember that you learned about comparison operators (>, <, >=, <=, ===). 
*/

function getGrade(score) {
    if (score === 100) return 'A++';
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F'
}

console.log(getGrade(96));
console.log(getGrade(82));
console.log(getGrade(56));

/*
Step 3
The teacher is really happy with the program you have created so far. But now they want to have an easy way to check if a student has a passing grade. A passing grade is anything that is not an "F".
Complete the function hasPassingGrade that takes a student score as a parameter. Your function should return true if the student has a passing grade and false if they do not.

Tips
Use the getGrade function to get the student's grade. Then check if the grade is passing or not.
*/

function hasPassingGrade(score) {
    const grade = getGrade(score);
    return grade !== 'F'
}

console.log(hasPassingGrade(100));
console.log(hasPassingGrade(53));
console.log(hasPassingGrade(87));

/*
Step 4
Now that the teacher has all of the information they need, they want to be able to message the student with the results.
Complete the studentMsg function with totalScores and studentScore for parameters. The function should return a string representing a message to the student.

If the student passed the course, the string should follow this format:
Example Code
Class average: average-goes-here. Your grade: grade-goes-here. You passed the course.

If the student failed the course, the string should follow this format
Example code
Class average: average-goes-here. Your grade: grade-goes-here. You failed the course.

Replace average-goes-here with the average of the total scores. 
Replace grade-goes-here with the student's grade.

Tips
Use the getAverage function to get the class average.
Use the getGrade function to get the student's grade.
Use string concatenation (+) to build the message.
Be careful with the punctuation and spaces in the message.
 */

function studentMsg(totalScores, studentScore) {
    const classAverage = getAverage(totalScores)
    const studentGrade = getGrade(studentScore)

    if (hasPassingGrade(studentScore)) {
        return `Class avarege: ${classAverage}. Your grade: ${studentGrade}. You passed the course`
    } else {
        return `Class avarege: ${classAverage}. Your grade: ${studentGrade}. You faied the course`
    }
}
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100))