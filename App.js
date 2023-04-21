document.getElementById('create-project').addEventListener('submit', (e) => {
    e.preventDefault();
    // Call the createProject function from your blockchain integration (e.g., using Web3.js)
    console.log('Creating project with the following parameters:');
    console.log('Funding goal:', document.getElementById('fundingGoal').value);
    console.log('Duration:', document.getElementById('duration').value);
});

document.getElementById('project-details').addEventListener('
