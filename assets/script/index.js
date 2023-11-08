'use strict';

// Utility functions to replace document.querySelector & querySelectorAll
function target(selector, parent = document) {
    return parent.querySelector(selector);
}

// Utility function to add an event listener
function onEvent(element, event, callback, ...options) {
    element.addEventListener(event, callback, ...options);
}

document.addEventListener('DOMContentLoaded', () => {
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

    magic8Ball.askQuestion = function (question) {
        if (question.trim() === '') {
            errorText.textContent = 'Please enter a valid question.';
            return;
        } else {
            errorText.style.visibility ='hidden';
        }

        answer.style.display = 'flex';
        answer.style.backgroundColor = '#fff';
        answer.style.fontWeight = '600';

        const randomNumber = Math.random();
        const randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;
        const randomIndex = Math.floor(randomNumberForListOfAnswers);
        const answerText = this.listOfAnswers[randomIndex];

        answer.textContent = answerText;

        console.log(question);
        console.log(answerText);
    };

    const onClick = () => {
        const question = questionInput.value;
        magic8Ball.askQuestion(question);
    };

    // Trigger the 'Ask' button when the Enter key is pressed in the input field
onEvent(questionInput, 'keyup', (event) => {
        if (event.key === 'Enter') {
            onClick();
        }
    });

    onEvent(askButton, 'click', onClick);
});
