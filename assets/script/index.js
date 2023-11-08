'use strict';

// Utility functions to replace document.querySelector & querySelectorAll
function target(selector, parent = document) {
    return parent.querySelector(selector);
}

// Utility function to add an event listener
function onEvent(element, event, callback, ...options) {
    element.addEventListener(event, callback, ...options);
}

onEvent(document, 'DOMContentLoaded', () => {
    const magic8Ball = {};
    magic8Ball.listOfAnswers = [
        'No', 'Yes', 'Outlook good',
        'Of course!', 'Without a doubt', 'In your dreams',
        'Outlook not so good', 'Don\'t count on it',
        'Ask again later', 'Signs point to yes'
    ];

    const answer = target('#answer');
    const questionInput = target('#question-input');
    const askButton = target('#ask-button');
    const errorText = target('#error');

    answer.style.display = 'none';

    const hasLetters = (str) => {
        return /[a-zA-Z]/.test(str);
    };

    magic8Ball.askQuestion = function (question) {
        if (question.trim() === '' || !hasLetters(question)) {
            errorText.textContent = 'Please enter a valid question.';
            errorText.style.visibility = 'visible';
            return;
        } else {
            errorText.style.visibility = 'hidden';
        }

        answer.style.display = 'flex';
        answer.style.backgroundColor = '#fff';
        answer.style.fontWeight = '600';

        const randomNumber = Math.random();
        const randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;
        const randomIndex = Math.floor(randomNumberForListOfAnswers);
        const answerText = this.listOfAnswers[randomIndex];

        answer.textContent = answerText;
    };

    const onClick = () => {
        const question = questionInput.value;
        magic8Ball.askQuestion(question);
    };

    onEvent(questionInput, 'keyup', (event) => {
        if (event.key === 'Enter') {
            onClick();
        }
    });

    onEvent(askButton, 'click', onClick);
});
