// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  /*let talk = document.querySelectorAll('textarea')[0];
  talk.addEventListener('input', (event) => {});
  const button = document.querySelectorAll('button')[0];
  let image = document.querySelectorAll('img')[0];
  button.addEventListener('click', (event) => {
    image.src = 'assets/images/smiling-open.png';
    speechSynthesis.speak(talk);
    image.src = 'assets/images/smiling.png';
  });
  */
    const ss = window.speechSynthesis;
  
    const voiceSelect = document.getElementById("voice-select");
    const text = document.getElementById("text-to-speak");
    
    const button = document.querySelectorAll("button")[0];
    const image = document.querySelectorAll("img")[0];
  
    let voices = [];
  
    ss.onvoiceschanged = () => {
      voices = ss.getVoices();
      for (let i = 0; i < voices.length ; i++) {
        const option = document.createElement('option');
        option.textContent = `${voices[i].name} (${voices[i].lang})`;
        option.setAttribute('data-lang', voices[i].lang);
        option.setAttribute('data-name', voices[i].name);
        voiceSelect.appendChild(option);
      }
    };
  
    button.addEventListener('click', () => {
      image.setAttribute('src', 'assets/images/smiling-open.png')
      let utterance = new SpeechSynthesisUtterance(text.value);
      for(let i = 0; i < voices.length; i++) {
        if (voices[i].name === voiceSelect.selectedOptions[0].getAttribute('data-name')) {
          utterance.voice = voices[i];
        }
      }
      ss.speak(utterance);
  
      utterance.addEventListener('end', () => {
        image.setAttribute('src', 'assets/images/smiling.png')
      });
    })
}