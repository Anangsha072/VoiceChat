const recognition = new webkitSpeechRecognition();
recognition.continuous = true;
recognition.lang = 'en-US';
recognition.interimResults = true;

const startButton = document.getElementById('startButton');
const recognizedText = document.getElementById('recognizedText');

startButton.addEventListener('click', function() {
    if (startButton.textContent === 'Start Recognition') {
        recognition.start();
        startButton.textContent = 'Stop Recognition';
    } else {
        recognition.stop();
        startButton.textContent = 'Start Recognition';
    }
});

recognition.onresult = function(event) {
    const result = event.results[event.results.length - 1];
    const transcript = result[0].transcript;
    recognizedText.innerText = transcript;
}