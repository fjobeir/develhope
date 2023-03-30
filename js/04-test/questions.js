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