// Ok so this is a little trickier but not really at the same time.
// Looks simple. Ok so with this I am having the event listener "click"
// become attached to the querySelector "populate-data".
// Look in index.html and you will see it on line 10.
// If you read this right to left and backwards it totally makes sense. Watch
// "populateDB" is a function from main.js. See line 46.
// The event listener is "click". That is the action the function is listening for
// "populateButton is from the first line of code written in this file."
// "#populate-data" is the ID of what the event is being attached to
// in the html file. Now go back to main.js to see the end of this

const populateButton = document.querySelector("#populate-data")
populateButton.addEventListener("click", populateDB)
