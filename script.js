// GET ELEMENTS
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startButton = document.getElementById("start-btn");
const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionSpan = document.getElementById("total-questions");
const scoreSpan = document.getElementById("score");
const finalScoreSpan = document.getElementById("final-score");
const maxScoreSpan = document.getElementById("max-score");
const resultMessage = document.getElementById("result-message");
const restartButton = document.getElementById("restart-btn");
const progressBar = document.getElementById("progress");
const qBadge = document.getElementById("q-badge");
const qCategory = document.getElementById("q-category");
const feedbackBar = document.getElementById("feedback");
const rCorrect = document.getElementById("r-correct");
const rWrong = document.getElementById("r-wrong");
const rPct = document.getElementById("r-pct");
const darkToggle = document.getElementById("dark-toggle");

const quizQuestions = [
     // ── ABOUT CASEY (Q1–Q10) ──
    {
        category: "About Casey",
        question: "What is my name?",
        answers: [
            {text: "Alex", correct: false},
            {text: "Casey", correct: true},
            {text: "Jordan", correct: false},
            {text: "Riley", correct: false}
        ]
    },
    {
        category: "About Casey",
        question: "How old am i?(Regardless of what you pick, you're wrong)",
        answers: [
            {text: "15", correct: false},
            {text: "16", correct: false},
            {text: "17", correct: true},
            {text: "18", correct: false}
        ]
    },
    {
        category: "About Casey",
        question: "What'd you think would be my skill level in web development?(Being Humble eyhh)",
        answers: [
            {text: "Beginner", correct: false},
            {text: "Intermediate", correct: true},
            {text: "Expert", correct: false},
            {text: "Has never coded", correct: false}
        ]
    },
    {
        category: "About Casey",
        question: "Which of these options best describes my hobbies?",
        answers: [
            {text: "Cooking, Painting and Art", correct: false},
            {text: "Reading Books, Making Researches, WatchingFootball and Gaming", correct: true},
            {text: "Hiking, Calisthenics and Yoga", correct: false},
            {text: "Dancing, Clubbing and music", correct: false}
        ]
    },
    {
        category: "About Casey",
        question: "What football club do i support?",
        answers: [
            {text: "Real Madrid", correct: false},
            {text: "FC Barcelona", correct: false},
            {text: "Atletico Madrid", correct: true},
            {text: "Sevilla FC", correct: false}
        ]
    },
    {
        category: "About Casey",
        question: "Which option below best describes my Religious Beliefs?",
        answers: [
            {text: "a Deist", correct: false},
            {text: "an Athiest", correct: false},
            {text: "An Agnostic Athiest", correct: true},
            {text: "a Thiest", correct: false}
        ]
    },
    {
        category: "About Casey",
        question: "What's the name of Atleti's home stadium?",
        answers: [
            {text: "Camp Nou", correct: false},
            {text: "Bernabeu", correct: false},
            {text: "Wanda Metropolitano", correct: true},
            {text: "San Siro", correct: false}
        ]
    },
    {
        category: "About Casey",
        question: "What language is primarily used for styling web pages?",
        answers: [
            {text: "Python", correct: false},
            {text: "CSS", correct: true},
            {text: "SQL", correct: false},
            {text: "Swift", correct: false}
        ]
    },
    {
        category: "About Casey",
        question: "What Device(Phone) do i use",
        answers: [
            {text: "The Iphone 13 pro-max", correct: false},
            {text: "Oneplus Nord CeE4", correct: true},
            {text: "RedMagic 7A", correct: false},
            {text: "Google Pixel 7", correct: false}
        ]
    },
    {
        category: "About Casey",
        question: "If I'm 17 now, what year do you think i was born?(You're still wrong regardless of what you pick)",
        answers: [
            {text: "2009", correct: false},
            {text: "2006", correct: false},
            {text: "2007", correct: false},
            {text: "2008", correct: true}
        ]
    },
    // ── GENERAL KNOWLEDGE (Q11–Q20) ──
    {
        category: "General Knowledge",
        question: "What is the Capital of Morocco?",
        answers: [
            {text: "Algiers", correct: false},
            {text: "Rabat", correct: true},
            {text: "Madrid", correct: false},
            {text: "Liechtenstein", correct: false}
        ],
    },
    {
        category: "General Knowledge",
        question: "Which Planet is the Farthest from the Sun?",
        answers: [
            {text: "Uranus", correct: false},
            {text: "Earth", correct: false},
            {text: "Neptune", correct: true},
            {text: "Jupiter", correct: false}
        ],
    },
    {
        category: "General Knowledge",
        question: "What is the Largest Ocean on Earth(by surface area)?",
        answers: [
            {text: "Atlantic Ocean", correct: false},
            {text: "Indian Ocean", correct: false},
            {text: "Arctic Ocean", correct: false},
            {text: "Pacific Ocean", correct: true}
        ],
    },
    {
        category: "General Knowledge",
        question: "Which country is the Least Populated in the World?",
        answers: [
            {text: "Argentina", correct: false},
            {text: "Honduras", correct: false},
            {text: "Vatican City", correct: true},
            {text: "Monaco", correct: false}
        ],
    },
    {
        category: "General Knowledge",
        question: "What does WWW stand for as an acronym?(Bonus Points Available)",
        answers: [
            {text: "World Wide Weeb", correct: false},
            {text: "World Wide Web", correct: true},
            {text: "World Wide We", correct: false},
            {text: "Web Wide World", correct: false}
        ]
    },
    {
        category: "Science",
        question: "What is the chemical symbol for gold?",
        answers: [
            {text: "Au", correct: true},
            {text: "Ag", correct: false},
            {text: "Fe", correct: false},
            {text: "Gd", correct: false}
        ]
    },
    {
        category: "Science",
        question: "How many bones are in the adult human body?",
        answers: [
            {text: "196", correct: false},
            {text: "206", correct: true},
            {text: "216", correct: false},
            {text: "226", correct: false}
        ]
    },
    {
        category: "History",
        question: "Who painted the Mona Lisa?",
        answers: [
            {text: "Michelangelo", correct: false},
            {text: "Raphael", correct: false},
            {text: "Leonardo da Vinci", correct: true},
            {text: "Donatello", correct: false}
        ]
    },
    {
        category: "History",
        question: "In which year did World War II end?",
        answers: [
            {text: "1943", correct: false},
            {text: "1944", correct: false},
            {text: "1945", correct: true},
            {text: "1946", correct: false}
        ]
    },
    {
        category: "Geography",
        question: "Was Mexico once a Spanish Colony, and What is their Favourite Food?",
        answers: [
            {text: "Burgers and Sandwiches", correct: false},
            {text: "Tacos and Enchiladas", correct: true},
            {text: "Burritos and Quesadillas", correct: false},
            {text: "Nachos and Salsa", correct: false}
        ]
    },

   
];

// STATE VARS
let currentQuestionIndex = 0;
let score = 0;
let answersDisabled = false;

totalQuestionSpan.textContent = quizQuestions.length;
maxScoreSpan.textContent = quizQuestions.length;

// ── DARK MODE ──
darkToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    darkToggle.textContent = document.body.classList.contains("dark")
        ? "☀️ Light Mode"
        : "🌙 Dark Mode";
});

// ── EVENT LISTENERS ──
startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", restartQuiz);

// ── QUIZ FLOW ──
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    scoreSpan.textContent = score;
    startScreen.classList.remove("active");
    quizScreen.classList.add("active");
    showQuestion();
}

function showQuestion() {
    answersDisabled = false;
    const currentQuestion = quizQuestions[currentQuestionIndex];
    const letters = ["A", "B", "C", "D"];

    qBadge.textContent = `Q ${currentQuestionIndex + 1} of ${quizQuestions.length}`;
    qCategory.textContent = currentQuestion.category.toUpperCase();
    currentQuestionSpan.textContent = currentQuestionIndex + 1;

    const progressPercent = (currentQuestionIndex / quizQuestions.length) * 100;
    progressBar.style.width = progressPercent + "%";

    questionText.textContent = currentQuestion.question;

    feedbackBar.className = "feedback-bar";
    feedbackBar.textContent = "";

    answersContainer.innerHTML = "";
    currentQuestion.answers.forEach((answer, i) => {
        const button = document.createElement("button");
        button.classList.add("answer-btn");
        button.dataset.correct = answer.correct;
        button.innerHTML = `<span class="ans-letter">${letters[i]}</span><span>${answer.text}</span>`;
        button.addEventListener("click", selectAnswer);
        answersContainer.appendChild(button);
    });
}

function selectAnswer(event) {
    if (answersDisabled) return;
    answersDisabled = true;

    const selectedButton = event.target.closest(".answer-btn");
    if (!selectedButton) return;
    const isCorrect = selectedButton.dataset.correct === "true";

    Array.from(answersContainer.children).forEach(button => {
        button.disabled = true;
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        } else if (button === selectedButton) {
            button.classList.add("incorrect");
        }
    });

    if (isCorrect) {
        score++;
        scoreSpan.textContent = score;
        feedbackBar.textContent = "✓ Correct!";
        feedbackBar.className = "feedback-bar show ok";
    } else {
        const correctText = Array.from(answersContainer.children)
            .find(b => b.dataset.correct === "true")
            .querySelector("span:last-child").textContent;
        feedbackBar.textContent = `✗ The correct answer was: ${correctText}`;
        feedbackBar.className = "feedback-bar show bad";
    }

    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < quizQuestions.length) {
            showQuestion();
        } else {
            showResults();
        }
    }, 1200);
}

function showResults() {
    quizScreen.classList.remove("active");
    resultScreen.classList.add("active");

    const total = quizQuestions.length;
    const wrong = total - score;
    const pct = Math.round((score / total) * 100);

    finalScoreSpan.textContent = score;
    rCorrect.textContent = score;
    rWrong.textContent = wrong;
    rPct.textContent = pct + "%";

    if (pct === 100) {
        resultMessage.textContent = "Perfect! You're a genius! 🎉";
    } else if (pct >= 80) {
        resultMessage.textContent = "Great job! You know your stuff!";
    } else if (pct >= 60) {
        resultMessage.textContent = "Good Effort! Keep Learning";
    } else if (pct >= 40) {
        resultMessage.textContent = "Keep trying! You'll get better!";
    } else {
        resultMessage.textContent = "Don't give up! Try again!";
    }
}

function restartQuiz() {
    resultScreen.classList.remove("active");
    startQuiz();
}
