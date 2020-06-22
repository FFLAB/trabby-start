var btn = document.getElementById('modal_opener');
var modal = document.querySelector('.modal');

function attachModalListeners(modalElm) {
  modalElm.querySelector('.close_modal').addEventListener('click', toggleModal);
  modalElm.querySelector('.overlay').addEventListener('click', toggleModal);
}

function detachModalListeners(modalElm) {
  modalElm.querySelector('.close_modal').removeEventListener('click', toggleModal);
  modalElm.querySelector('.overlay').removeEventListener('click', toggleModal);
}

function toggleModal() {
  var currentState = modal.style.display;

  // If modal is visible, hide it. Else, display it.
  if (currentState === 'none') {
    modal.style.display = 'block';
    attachModalListeners(modal);
  } else {
    modal.style.display = 'none';
    detachModalListeners(modal);  
  }
}

// my add: close with ESC
document.addEventListener('keydown', function(e) {
  let keyCode = e.keyCode;
  if (keyCode === 27) {
 //my action to close ... ?
 modal.style.display = 'none';
 detachModalListeners(modal); 
  }
});

btn.addEventListener('click', toggleModal);