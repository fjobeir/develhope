var questions = [
    {
        questionText: 'How to change text color in CSS',
        answers: [
            {
                answerText: 'Using font-color',
                isCorrect: false
            },
            {
                answerText: 'Using color',
                isCorrect: true
            },
            {
                answerText: 'Using text-color',
                isCorrect: false
            }
        ]
    },
    {
        questionText: 'How to change background position in CSS',
        answers: [
            {
                answerText: 'background-location',
                isCorrect: false
            },
            {
                answerText: 'background-x and background-y',
                isCorrect: false
            },
            {
                answerText: 'background-position',
                isCorrect: true
            },
            {
                answerText: 'bg-position',
                isCorrect: false
            }
        ]
    }
]

var slider = document.getElementById('slider')

for (var i = 0; i < questions.length; i++) {
    var newSlide = ''
    newSlide = `
    <div class="slide" id="slide${i+1}">
        <p>${questions[i].questionText}</p>
        <div class="answers">
        `
        for (var j = 0; j < questions[i].answers.length; j++) {
            newSlide += `<p>
                <input type="radio" name="q${i}" value="${j}">
                <small>${questions[i].answers[j].answerText}</small>
            </p>`
        }

    newSlide += `
        </div>
    </div>`

    slider.innerHTML += newSlide
}

const resultBtn = document.getElementById('result-btn')
resultBtn.addEventListener('click', function() {
    // loop on the questions
    // for every question, we will get the answers
    // get the user answer
    // compare it to the correct answer
    // increase the final mark (if correct)
    let finalResult = 0;
    for (var i = 0; i < questions.length; i++) {
        const answers = Array.from(document.getElementsByName(`q${i}`));
        // const selectedAnswer = answers.filter((input) => input.checked)
        const selectedAnswer = answers.find((input) => input.checked)
        if (selectedAnswer) {
            // This means that the user has answered this question
            // but we still do not know if it is the correct answer or not
            const answerIndex = selectedAnswer.value
            if (questions[i].answers[answerIndex].isCorrect) {
                // the user has answered correctly
                finalResult += 1
            }
        }
    }
    window.alert(`You had ${finalResult} / ${questions.length} correct`)
})