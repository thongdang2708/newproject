let card_container = document.getElementById('card-container');
let content = document.getElementById('content');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let open_card = document.getElementById('open-card');
let close_card = document.getElementById('close-card');
let add_container = document.getElementById('add-container');
let add_card = document.getElementById('add-card');
let question = document.getElementById('question');
let answer = document.getElementById('answer');
let clearBtn = document.getElementById('clear')

let checkStorage = JSON.parse(localStorage.getItem('quiz'))
const data = localStorage.getItem('quiz') !== null ? checkStorage : [];


// [{
//     question: "What is PHP?",
//     answer: "A programming language"
// }, {
//     question: "What is C++?",
//     answer: "A programming language"
// }];
let currentActiveCard = 0;
let cardEls = [];

createCards();


function createCards() {
    data.forEach((infor, index) => createCard(infor, index));
};

function createCard(infor, index) {

    let card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
    <div class="inner-card">
        <div class="inner-card-front">
            <p> ${infor.question} </p>
        </div>

        <div class="inner-card-back">
            <p> ${infor.answer} </p>
        </div>
    </div>
    
    `;

    if (index === 0) {
        card.classList.add('active');
    };

    card.addEventListener('click', () => {
        card.classList.toggle('show');
    })

    card_container.appendChild(card);
    cardEls.push(card);
    updateContent();


};

function updateContent() {
    content.innerText = `${currentActiveCard + 1} / ${cardEls.length}`
};

next.addEventListener('click', () => {

    cardEls[currentActiveCard].className = 'card left';

    currentActiveCard++;

    if (currentActiveCard > cardEls.length - 1) {
        currentActiveCard = cardEls.length - 1
    };

    cardEls[currentActiveCard].className = 'card active';

    updateContent();
});

prev.addEventListener('click', () => {

    cardEls[currentActiveCard].className = 'card right';

    currentActiveCard--;

    if (currentActiveCard < 0) {
        currentActiveCard = 0;
    };

    cardEls[currentActiveCard].className = 'card active';
    updateContent();

});

open_card.addEventListener('click', () => {
    add_container.classList.add('active');
});

close_card.addEventListener('click', () => {
    add_container.classList.remove('active');
});

add_card.addEventListener('click', () => {

    let questionEl = question.value.trim();
    let answerEl = answer.value.trim();

    let quiz = {
        question: questionEl,
        answer: answerEl
    };

    data.push(quiz);

    localStorage.setItem('quiz', JSON.stringify(data));
    location.reload();
});

clearBtn.addEventListener('click', () => {
    localStorage.clear();
    card_container.innerHTML = '';
    location.reload();
})