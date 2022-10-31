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


  /*
  function populateVoiceList() {
    if (typeof speechSynthesis === 'undefined') {
      return;
    }
  
    const voices = speechSynthesis.getVoices();
  
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
  
      if (voices[i].default) {
        option.textContent += ' — DEFAULT';
      }
  
      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      document.getElementById("voice-select").appendChild(option);
    }
  }
  
  populateVoiceList();
  if (typeof speechSynthesis !== 'undefined' && speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }
  const button = document.querySelectorAll('button')[0];
  let image = document.querySelectorAll('img')[0];
  button.addEventListener('click', (event) => {
    image.src = 'assets/images/smiling-open.png';


  const input = document.querySelector('textarea');
  const log = document.getElementById('values');
  
  input.addEventListener('input', updateValue);
  
  function updateValue(e) {
    //log.textContent = e.target.value;
    let utterance = new SpeechSynthesisUtterance('e.target.value');
    speechSynthesis.speak(utterance);
    //speechSynthesis.speak(e.target.value);
  }


  });
  */


const synth = window.speechSynthesis;

const inputForm = document.querySelector('main');
const inputTxt = document.querySelector('textarea');
const voiceSelect = document.getElementById('voice-select');

let voices = [];

function populateVoiceList() {
  voices = synth.getVoices();

  for (let i = 0; i < voices.length ; i++) {
    const option = document.createElement('option');
    option.textContent = `${voices[i].name} (${voices[i].lang})`;

    if (voices[i].default) {
      option.textContent += ' — DEFAULT';
    }

    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
    voiceSelect.appendChild(option);
  }
}

populateVoiceList();
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}


const button = document.querySelectorAll('button')[0];
  let image = document.querySelectorAll('img')[0];
  button.addEventListener('click', (event) => {
    image.src = 'assets/images/smiling-open.png';


  inputForm.onsubmit = (event) => {
  event.preventDefault();

  const utterThis = new SpeechSynthesisUtterance(inputTxt.value);
  const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
  for (let i = 0; i < voices.length ; i++) {
    if (voices[i].name === selectedOption) {
      utterThis.voice = voices[i];
    }
  }
  utterThis.pitch = 2;
  utterThis.rate = 1;
  synth.speak(utterThis);

  inputTxt.blur();
}
/*
const amISpeaking = synth.speaking;
if (amISpeaking == false) {
  image.src = 'assets/images/smiling.png';
}
*/

inputForm.onsubmit = function (event) {
  event.preventDefault();

  speak();

  inputTxt.blur();
};

voiceSelect.onchange = function () {
  speak();
};
});
}