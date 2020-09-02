# javaScript-password-generator

## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password
<!-- Confirm( that user needs new password) -->
WHEN I click the button to generate a password
<!-- If (they click the affirmative) -->
THEN I am presented with a series of prompts for password criteria
<!-- Run (confirm) for each password criteria and save ??boolean?? value -->
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 
characters
<!--Prompt user for length of password, setting a limit of 8-128 and store prompt to a variable -->
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
<!-- If user does not confirm any criteria during prompts, alert that you must choose at least one criteria and reset to beginning -->
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
<!-- Run a function to create password -->
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
<!-- Display password -->
```