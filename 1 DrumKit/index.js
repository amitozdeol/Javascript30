const keys = document.querySelectorAll("div.key");

keys.forEach(key => {
  key.addEventListener("click", playSound);
  key.addEventListener("transitionend", removeTransition);
});
window.addEventListener("keydown", playSound);

/**
 * Play audio when a box is clicked or a key is pressed in keyboard
 * @param {Element} e
 */
function playSound(e) {
  let keyCode = e.keyCode;
  let key = document.querySelector(`div[data-key="${keyCode}"]`);

  //if div clicked
  if (!key) {
    key = this;
    keyCode = this.dataset.key;
  }

  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  if (!audio) return;

  key.classList.add("animate"); //for animation
  audio.currentTime = 0; //rewind to start of the sound
  audio.play();
}

/**
 * Remove animate class from this element
 * @param {Element} e
 */
function removeTransition(e) {
  //return if the animation class is not present and the property is not tranform
  if (e.propertyName !== "transform" || !this.classList.contains("animate"))
    return;

  this.classList.remove("animate"); //remove animation
}
