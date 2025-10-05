// Array of sound files in the sounds folder
const sounds = [
	'applause.mp3',
	'boo.mp3', 
	'gasp.mp3',
	'tada.mp3',
	'victory.mp3',
	'wrong.mp3'
];

let currentAudio = null;

// Create buttons for each sound
const buttonsContainer = document.getElementById('buttons');
const errorMessage = document.getElementById('error-message');

sounds.forEach(sound => {
	const button = document.createElement('button');
	button.className = 'btn';
	button.textContent = sound.replace('.mp3', '');
	button.addEventListener('click', () => playSound(sound));
	buttonsContainer.appendChild(button);
});

// Create stop button
const stopButton = document.createElement('button');
stopButton.className = 'stop';
stopButton.textContent = 'Stop';
stopButton.addEventListener('click', stopSound);
buttonsContainer.appendChild(stopButton);

function playSound(soundFile) {
	// Stop currently playing sound
	stopSound();
	
	// Clear any previous errors
	errorMessage.textContent = '';
	
	// Play new sound
	currentAudio = new Audio(`sounds/${soundFile}`);
	
	currentAudio.play().catch(error => {
		errorMessage.textContent = `Error playing ${soundFile}: ${error.message}`;
		console.error('Audio play failed:', error);
	});
}

function stopSound() {
	if (currentAudio) {
		currentAudio.pause();
		currentAudio.currentTime = 0;
		currentAudio = null;
	}
}

// Handle uncaught errors for Cypress
window.addEventListener('error', (event) => {
	console.error('Global error:', event.error);
});

window.addEventListener('unhandledrejection', (event) => {
	console.error('Unhandled promise rejection:', event.reason);
	event.preventDefault();
});