const textName = document.getElementById('text-name');
const firstSemester = document.getElementById('input-first');
const secondSemester = document.getElementById('input-second');
const thirdSemester = document.getElementById('input-third');
const fourthSemester = document.getElementById('input-fourth');
const checkBtn = document.getElementById('check-btn');
const resultSpan = document.getElementById('result');
const cardGradeBook = document.querySelector('.cardGradeBook');

function getAverage(scores) {
    const sum = scores.reduce((total, score) => total + score, 0);
    return sum / scores.length;
}

function getGrade(score) {
    if (score === 100) return 'A++';
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F'
}

function hasPassingGrade(score) {
    const grade = getGrade(score);
    return grade !== 'F'
}

function studentMsg(studentScore) {
    const studentName = textName.value;

    if (hasPassingGrade(studentScore)) {
        return `${studentName} passed the course`
    } else {
        return `${studentName} failed the course`
    }
}

function calculateTotal() {
    const first = Number(firstSemester.value) || 0;
    const second = Number(secondSemester.value) || 0;
    const third = Number(thirdSemester.value) || 0;
    const fourth = Number(fourthSemester.value) || 0;

    const scores = [first, second, third, fourth];
    return getAverage(scores);
}

function renderSecondForm(studentScore) {
    cardGradeBook.innerHTML = `
        <h2>FreeCodeCamp</h2>
        <h1>Grade Book App</h1>
        <form>
            <label style="width: 100%; text-align: center; letter-spacing: 1px;">${textName.value}</label>
            <div class="inputGradeBook">
                <label>Average score</label>
                <input id="average-score" class="input" placeholder="${studentScore.toFixed(2)}" disabled>
                <label>Letter grade</label>
                <input id="letter-grade" class="input" placeholder="${getGrade(studentScore)}" disabled>
                <label>Approved</label>
                <input id="approved" class="input" placeholder="${hasPassingGrade(studentScore)}" disabled>
            </div>
            <button id="new-student-btn">New student</button>
            <span id="result">${studentMsg([calculateTotal()], studentScore)}</span>
        </form>
    `;

    const newStudentBtn = document.getElementById('new-student-btn');
    newStudentBtn.addEventListener('click', () => {
        location.reload(); 
    });
}

checkBtn.addEventListener('click', (event) => {
    event.preventDefault();

    const inputs = [
        { element: textName, message: 'Please enter student name' },
        { element: firstSemester, message: 'Please enter first semester score' },
        { element: secondSemester, message: 'Please enter second semester score' },
        { element: thirdSemester, message: 'Please enter third semester score' },
        { element: fourthSemester, message: 'Please enter fourth semester score' }
    ];

    const emptyInput = inputs.find(input => input.element.value.trim() === '');

    if (emptyInput) {
        alert(emptyInput.message);
        return;
    }

    const studentScore = calculateTotal();
    renderSecondForm(studentScore);
});