
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const speech = document.getElementById('speech');

const recognition = new webkitSpeechRecognition();
recognition.lang = "en-US";
recognition.continuous = true;
recognition.interimResults = true;

start.addEventListener('click', () => {
    recognition.start();
});

stop.addEventListener('click', () => {
    recognition.stop();
});

recognition.onresult = (event) => {
    const transcript = Array.from(event.results)
        .map(result => result[0].transcript)
        .join('');
    speech.value = transcript;
};





