const grades = 79;

function grading(grades) {
    if (grades >= 80 && grades <= 100) {
        return 'A';
    } else if (grades >= 60 && grades <= 79) {
        return 'B';
    } else if (grades >= 50 && grades <= 59) {
        return 'C';
    } else if (grades >= 40 && grades <= 49) {
        return 'D';
    } else if (grades < 40) {
        return 'E';
    } else {
        return 'Please input a value between 0 and 100';
    }
}

console.log(grading(grades)); // Call the function with 'grades' as the argument
 // Function to show the grade result
 function showGrade() {
    const gradeInput = document.getElementById("gradeInput").value;
    const resultDiv = document.getElementById("result");

    const grade = parseInt(gradeInput);

    if (isNaN(grade) || grade < 0 || grade > 100) {
        resultDiv.innerHTML = 'Please enter a valid grade between 0 and 100.';
    } else {
        const gradeResult = grading(grade);
        resultDiv.innerHTML = `Your grade is: ${gradeResult}`;
    }
}