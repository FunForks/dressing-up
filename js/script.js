const dress = document.getElementById("dress");
const dresses = document.getElementById("dresses");

function putOnDress(event) {
  const target = event.target;
  if ((target.tagName = "IMG")) {
    dress.src = target.src;
  }
}

dresses.addEventListener("mouseup", putOnDress);
