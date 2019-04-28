//Grab all inputs
const inputs = document.querySelectorAll(".content input");
let root = document.documentElement;

inputs.forEach(input => input.addEventListener("input", handleUpdate));

//Change variable values on input change
function handleUpdate() {
  const suffix = this.dataset.value || "";
  root.style.setProperty(`--${this.name}`, this.value + suffix);
}
