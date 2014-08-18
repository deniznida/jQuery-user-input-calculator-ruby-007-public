---
language: javascript, html, css
tags: js, jquery, switch, if, else, conditional, statement, beginner
type: lab, challenge
resources: 8
---

# Code Challenge - jQuery User Input Calculator

Students will work in groups to create a calculator that accepts user input using jQuery event listeners and JavaScript functions, if/else or switch statements, and jQuery val methods.

## Steps

1. Fork this repository.
2. CLone Your fork.
3. cd into the folder for this project.
4. open index.html in the browser and bring up the JavaScript console.
5. open the project folder in your code editor.
6. In js/calc.js write the code neccesary to make a functioning calculator.  

  The calculator should do the following:  

    1. the calculator should take input for 2 separate numbers and 1 operation: '+', '-', '*', '/', and store them as variables.
    5. When the user clicks the equals button, the calculator should update a result variable based on the operation choosen and the value of the two numbers. It should then report the result into the h2 with an id="result". If the user leaves a number field blank or inserts some input that is not a number then h2 with id="result" should instead print the error message: "Sorry, one of those is not a valid number!", or if the operation inserted is not one of the valid accepted operations then the error message should then read "Sorry, not a valid operation!"

See a live working example of the simple calculator [here](http://flatiron-school-curriculum.github.io/fe-jquery-user-input-calc/)

## Resources

 * [MDN - Vars](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var)
 * [MDN - Switch Statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)
 * [MDN - if/Else Statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
 * [MDN - Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)
 * [jQuery API - Selectors](http://api.jquery.com/category/selectors/)
 * [jQuery API - Events - Click](http://api.jquery.com/click/)
 * [jQuery API - Text](http://api.jquery.com/text/)
 * [Live Working Example](http://flatiron-school-curriculum.github.io/fe-jquery-user-input-calc/)