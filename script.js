//your JS code here. If required.
const sounds = [
	"applause.mp3", "boo.mp3", "gasp.mp3", "tada.mp3", "victory.mp3", "wrong.mp3"
];

// select the buttons container, we will create buttons dynamically
const buttonContainer = document.getElementById('buttons');

// take currentSound as null
let currentAudio = null;

// run for loop on array of sounds
sounds.forEach((sound) => {
	let button = document.createElement('button');
	button.className = 'btn';
	button.textContent = sound.replace(".mp3", "");
	button.addEventListener("click", () => playSound(sound));
	buttonContainer.appendChild(button);
});

// now create and append stop button
let stopButton = document.createElement('button');
stopButton.className = 'stop';
stopButton.textContent = 'Stop';
stopButton.addEventListener('click', stopSound);
buttonContainer.appendChild(stopButton);

// create a function stopSound
function stopSound(){
	if(currentAudio){
		currentAudio.pause();
		currentAudio.currentTime();
	}
}

// create a function playSound
function playSound(soundFile){
	// first stop the current audio
	if(currentAudio){
		currentAudio.pause();
		currentAudio.currentTime();
	}

	// now play another sound
	currentAudio = new Audio(`sound/${soundFile}`);
	currentAudio.play();
}















