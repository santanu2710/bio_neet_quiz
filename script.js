function checkAnswers() {
    let score = 0;
    const totalQuestions = 60;

    // Correct answers
    const correctAnswers = {
        1 : "a",
        2 : "b", 
        3 : "a",
        4 : "d",
        5 : "a",
        6 : "c",
        7 : "d",
        8 : "d",
        9 : "d",
        10 : "a",
        11 : "b",
        12 : "d",
        13 : "c",
        14 : "a",
        15 : "b",
        16 : "b",
        17 : "b",
        18 : "b",
        19 : "b",
        20 : "b",
        21 : "b",
        22 : "c",
        23 : "c",
        24 : "b",
        25 : "a",
        26 : "c",
        27 : "a",
        28 : "a",
        29 : "b",
        30 : "c",
        31 : "c",
        32 : "b",
        33 : "b",
        34 : "a",
        35 : "b",
        36 : "b",
        37 : "a",
        38 : "d",
        39 : "b",
        40 : "a",
        41 : "b",
        42 : "c",
        43 : "d",
        44 : "a",
        45 : "a",
        46 : "c",
        47 : "a",
        48 : "b",
        49 : "b",
        50 : "c",
        51 : "c",
        52 : "a",
        53 : "c",
        54 : "a",
        55 : "b",
        56 : "a",
        57 : "d",
        58 : "b",
        59 : "c",
        60 : "b",
    };

    // Check answers
    for (let i = 1; i <= totalQuestions; i++) {
        const userAnswer = document.querySelector(`input[name="${i}"]:checked`);
        if (userAnswer && userAnswer.value === correctAnswers[`${i}`]) {
            score++;
        }
        else if(userAnswer && userAnswer.value !== correctAnswers[`${i}`])
        {
            score -= 0.25;
        }
    }

    window.location.href = `result.html?score=${score}&total=${totalQuestions}`;

    // Display result
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `You scored ${score} out of ${totalQuestions}`;
}