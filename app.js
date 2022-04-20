// import functions

// grab DOM elements
const btn = document.getElementById('btn');
const animalDiv = document.getElementById('animalDiv');
// set event listeners 
btn.addEventListener('click', () => {
    console.log('btn clicked');
    animalDiv.classList.remove('hidden');
});

    // get user input
    // use user input to update state 
    // update DOM to reflect the new state
    
