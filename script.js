const personName = "Aniket";

const quiz = [

    {
        question: "What is Aniket's favourite food?",
        options: [
            "Pizza",
            "Biryani",
            "Burger",
            "Paneer"
        ],
        answer: 1
    },

    {
        question: "What does Aniket enjoy?",
        options: [
            "Gaming",
            "Gym",
            "Reading",
            "None"
        ],
        answer: 1
    },

    {
        question: "What is Aniket's favourite colour?",
        options: [
            "Black",
            "Blue",
            "Red",
            "White"
        ],
        answer: 0
    },

    {
        question: "What would Aniket choose?",
        options: [
            "Beach",
            "Mountains",
            "City",
            "Village"
        ],
        answer: 1
    },

    {
        question: "What is Aniket's favourite drink?",
        options: [
            "Chai ☕",
            "Coffee",
            "Juice",
            "Milk"
        ],
        answer: 0
    },

    {
        question: "What does Aniket prefer?",
        options: [
            "Morning",
            "Night",
            "Afternoon",
            "Evening"
        ],
        answer: 3
    },

    {
        question: "Which describes Aniket best?",
        options: [
            "Funny",
            "Serious",
            "Quiet",
            "Adventurous"
        ],
        answer: 0
    },

    {
        question: "What would Aniket choose for a holiday?",
        options: [
            "Travel",
            "Stay home",
            "Shopping",
            "Movie"
        ],
        answer: 0
    },

    {
        question: "What is more important to Aniket?",
        options: [
            "Friends",
            "Money",
            "Fame",
            "Sleep"
        ],
        answer: 0
    },

    {
        question: "How well do you think you know Aniket?",
        options: [
            "Very well 😎",
            "Pretty well",
            "A little",
            "Not much"
        ],
        answer: 0
    }

];

let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;

document.getElementById("personName").textContent = personName;
document.getElementById("personName2").textContent = personName;
document.getElementById("resultName").textContent = personName;

function startQuiz() {

    document.getElementById("startScreen").classList.add("hidden");
    document.getElementById("quizScreen").classList.remove("hidden");

    showQuestion();
}

function showQuestion() {

    selectedAnswer = null;

    const q = quiz[currentQuestion];

    document.getElementById("questionNumber").textContent =
        `Question ${currentQuestion + 1}/${quiz.length}`;

    document.getElementById("score").textContent =
        `Score: ${score}`;

    document.getElementById("question").textContent =
        q.question;

    const optionsDiv = document.getElementById("options");

    optionsDiv.innerHTML = "";

    q.options.forEach((option, index) => {

        const div = document.createElement("div");

        div.className = "option";

        div.textContent = option;

        div.onclick = function () {

            selectedAnswer = index;

            document.querySelectorAll(".option")
                .forEach(item =>
                    item.classList.remove("selected")
                );

            div.classList.add("selected");
        };

        optionsDiv.appendChild(div);
    });

    const progress =
        (currentQuestion / quiz.length) * 100;

    document.getElementById("progressBar")
        .style.width = progress + "%";
}

function nextQuestion() {

    if (selectedAnswer === null) {

        alert("Please select an answer!");

        return;
    }

    if (selectedAnswer === quiz[currentQuestion].answer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < quiz.length) {

        showQuestion();

    } else {

        showResult();
    }
}

function showResult() {

    document.getElementById("quizScreen")
        .classList.add("hidden");

    document.getElementById("resultScreen")
        .classList.remove("hidden");

    const percentage =
        Math.round((score / quiz.length) * 100);

    document.getElementById("percentage")
        .textContent = percentage + "%";

    let message;

    if (percentage >= 80) {

        message = "You really know me! ❤️";

    } else if (percentage >= 50) {

        message = "Pretty good! 😎";

    } else {

        message = "Bro... do you even know me? 😂";
    }

    document.getElementById("resultMessage")
        .textContent = message;
}