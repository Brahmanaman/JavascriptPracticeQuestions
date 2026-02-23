let box = document.querySelector(".box")
let angle = 0;
let rotationCount = 0;
box.addEventListener("dblclick", function () {
    angle += 360;
    rotationCount++;
    box.style.transform = `rotate(${angle}deg)`;
    box.textContent = rotationCount;
})