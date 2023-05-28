var shape = document.getElementById("shape");

function circle() {
  shape.className = "circle";
  shape.style.transition = "0.6s";
}

function square() {
  shape.className = "square";
}

function rectangle() {
  shape.className = "rectangle";
}

function triangle() {
  shape.className = "triangle";
}

function reset() {
    shape.className = "reset";
}