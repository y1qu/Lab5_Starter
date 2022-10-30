// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const selectElement = document.querySelector('.horn');
  
  selectElement.addEventListener('change', (event) => {
    let image = document.querySelectorAll('img')[0]
    if(event.target.value == air-horn){
      image.src = "air-horn.svg"
    }
    else if (event.target.value == car-horn){
      image.src = "car-horn.svg"
    }
    else if (event.target.value == party-horn){
      image.src = "party-horn.svg"
    }
  });

}