const jokeContainer = document.getElementById('joke');
const button = document.getElementById('jokeButton');
const copyButton = document.getElementById('copyButton');

async function fetchJoke() {
    try {
        jokeContainer.innerText = 'Loading...';
        const response = await fetch('https://official-joke-api.appspot.com/random_joke');
        if (!response.ok) throw new Error('Network response was not ok');
        const joke = await response.json();
        jokeContainer.innerText = `${joke.setup} - ${joke.punchline}`;
    } catch (error) {
        jokeContainer.innerText = 'Error fetching joke!';
        console.error('Fetch error:', error);
    }
}

button.addEventListener('click', fetchJoke);

copyButton.addEventListener('click', () => {
    navigator.clipboard.writeText(jokeContainer.innerText);
    alert('Joke copied to clipboard!');
});

// Fetch a joke when the page loads
fetchJoke();
