# javaScript-password-generator

## Goals and Challenges

This project was designed to challenge us to add logic to a website so that randomly generated passwords display based on prompts and confirmations directed at the user. It challenged us to implement javaScript techniques which we learned in class. 

In my case, I wanted to learn to incorporate arrays and objects, which brought some additional challenges. In addition to writing functions to incorporate the prompt and confirm data, I created an object where character code arrays were stored in a separate array. This resulted in a two-dimensional array which required a unique solution to creating the generated password.

You will see that altogether, this particular solution is probably over-complex, but focuses on exploring how to use some of the tools and methods that will become essential as we tackle more difficult problems.

Take a look below to see our guidelines!

## User Story


AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security


## Acceptance Criteria

GIVEN I need a new, secure password
]WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 
characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page



##