# magic-8-ball-dev

## Description:
This was one of our assignments for school, however we were given free range on how to approach it. 

I decided to create a magic 8 ball (taking it back to the 90s! 📻 ) where you ask a yes or no question and the ball will give an answer.

### Directions:
1. Click the link to the demo below
2. Enter a question in the input field
3. Click Ask
4. Magic 8 ball will reveal an answer

### Screenshots and explanations
1. Validation

 ```
         if (question.trim() === '' || !hasLetters(question)) {
            errorText.textContent = 'Please enter a valid question.';
            errorText.style.visibility = 'visible';
            return;
        } else {
            errorText.style.visibility = 'hidden';
        }
 ```

- Validation for if empty & if its letters
- Will want to add more validation later, something to do with repeating letters or coming up
with a way of validating questions.

2. Events

```
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
```

- Events for both on click as well as pressing enter.



### The answers currently are:
'No', 'Yes', 'Outlook good', 'Of course!', 'Without a doubt',
'In your dreams', 'Outlook not so good', 'Don\'t count on it',
'Ask again later', 'Signs point to yes'.

- Currently an array of answers, hoping to add more later.

### Link to demo: 
https://mcguenette.github.io/magic-8-ball-dev/

![](https://github.com/mcguenette/magic-8-ball-dev/blob/main/assets/img/MAGIC8BALL.png)

### Technology used:
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
