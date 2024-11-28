// Enable speech synthesis for bot replies
function speakMessage(message) {
  if ('speechSynthesis' in window) {
    const speech = new SpeechSynthesisUtterance(message);
    speech.lang = "en-US"; // Set the language
    speech.rate = 1; // Adjust speech rate
    speech.pitch = 1; // Adjust pitch
    speech.volume = 1; // Adjust volume

    speechSynthesis.speak(speech);
  }
}
