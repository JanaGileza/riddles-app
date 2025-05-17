# riddles-app Business Logic

~~When the user navigates to /home they should be able to choose between easy, medium, and hard riddles~~

When the user navigates to /randomriddles they should receive a riddle on the screen, the option to click and view a hint, and an entry box where they can guess the answer to the riddle - this endpoint will have the following properties: - users get 3 chances to guess correctly - an entry box will be on the screen, where the user will type in the answers and will be limited to ~60 characters - if the user answers incorrectly, the correct answer will display after the third try - after the fail condition is met, the user will be prompted to choose between either a new riddle ~~or to go back to the home screen~~ - if the user answers correctly before the fail criteria, they will be told they answered correctly, and given a prompt to receive a new riddle ~~or to go back to the home page~~ - the same riddle should not show up twice in a row

1. No riddle should show up twice in a row
2. The user should be able to input the correct answer given any case spelling and still be correct(correct answer having case discrepancies from key will not forfeit their correctness)
3. The user will only have 3 attempts per riddle, and after that, the guesses will be reset after the fail criteria is met
4. If a user answers incorrectly all 3 times, they will be shown the correct answer to the riddle on the screen
5. The user will be able to click on part of the screen to receive a hint for the riddle - the correct hint will show up, and will only show up once the user clicks to view it
6. The user cannot return an empty answer, there will be a message notifying them that they did not answer and to first type their guess before clicking enter/submit/etc

Critical Functions:
attemptAnswer() => scan the answer given by the user, determine if there is any input, and determine whether user input matches answer (case insensitive). if the answer given is correct or if user runs out of attempts, move to next riddle.
randomRiddles() => display a random riddle, and disallow the user to see the same riddle twice in a row (i.e., user given riddle 3 first, the next riddle can be riddle 1 or riddle 2, but cannot be riddle 3 again immediately after)
attemptsUsed() => displays to the user that they initially get 3 attempts, increments attempts used for each false answer, resets back to 0 used guesses upon a new riddle being displayed
displayHint() => user will see the correct hint for the riddle they were given upon choosing to click and view the hint. will not display beforehand.

//"Riddle solved!"
//"Your answer is incorrect. Try again!"
