// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  let record = 0;
  let sond = document.getElementsByClassName('hidden')[0];
  const selectElement = document.getElementById('horn-select');
  selectElement.addEventListener('change', (event) => {
    let image = document.querySelectorAll('img')[0];
    if(event.target.value == 'air-horn'){
      image.src = 'assets/images/air-horn.svg';
      sond.src = 'assets/audio/air-horn.mp3';
      record = 0;
    }
    else if (event.target.value == 'car-horn'){
      image.src = 'assets/images/car-horn.svg';
      sond.src = 'assets/audio/car-horn.mp3';
      record = 0;
    }
    else if (event.target.value == 'party-horn'){
      image.src = 'assets/images/party-horn.svg';
      sond.src = 'assets/audio/party-horn.mp3';
      record = 1;
    }
  });

  const selectvolume = document.getElementById('volume');
  selectvolume.addEventListener('change', (event) => {
    let imagee = document.querySelectorAll('img')[1];
    sond.volume = event.target.value / 100;
    if (event.target.value == 0){
      imagee.src = 'assets/icons/volume-level-0.svg';
    }
    else if (event.target.value < 33){
      imagee.src = 'assets/icons/volume-level-1.svg';
    }
    else if (event.target.value < 67){
      imagee.src = 'assets/icons/volume-level-2.svg';
    }
    else {
      imagee.src = 'assets/icons/volume-level-3.svg';
    }
  });

  const button = document.querySelectorAll('button')[0];
  button.addEventListener('click', (event) => {
    if(record == 1){
      const jsConfetti = new JSConfetti()
      jsConfetti.addConfetti()
    }
    sond.play();
  });

}