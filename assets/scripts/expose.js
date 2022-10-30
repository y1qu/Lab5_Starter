// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const selectElement = document.querySelector('.horn-select');
  
  selectElement.addEventListener('change', (event) => {
    let image = document.querySelectorAll('img')[0]
    if(event.target.value == 'air-horn'){
      image.src = "assets/images/air-horn.svg"
    }
    else if (event.target.value == 'car-horn'){
      image.src = "/assets/images/car-horn.svg"
    }
    else if (event.target.value == 'party-horn'){
      image.src = "./assets/images/party-horn.svg"
    }
  });

}