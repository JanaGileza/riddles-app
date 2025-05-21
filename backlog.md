# Future Changes to Consider

## UI

1. Upon user feedback, determine if focus modal should be changed to a simple UI visual feedback instead.
2. Turn off ability to type in answer box after 3 attempts potentially
3. Add shading to buttons when cursor is hovering over to give more user feedback

## Tech Debt

1. Generalize and get rid of "riddle" name spaces in each component under RiddleForms folder to allow more universal component naming
2. Generalize any specific attributes in current "riddle-x" components to allow more usability in other areas of the project
3. Give the user the ability to hover over some text in the dialog to allow them to view the answer if they choose (dialog versus the page itself so that they at least have to attempt the guess once)
4. Allow the user to end the game both within the dialog and right after starting the game (before guessing) so they don't feel stuck in the game
5. Create and add a new favicon for title
6. Make it so that the user cannot click "close" and still attempt to answer the riddle after running out of guesses
7. Investigate making the website look more cohesive overall
8. Investigate adding tags and metadata for webcrawling
9. Investigate solution for "Hint Hover" for mobile devices to allow a toggle state, since hover not supported

##Updates Handled:

1. Have generalized components as mentioned in the tech debt section to allow more usability, making the components more "dumb"
