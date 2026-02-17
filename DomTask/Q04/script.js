const box = document.querySelector(".box")
const left = document.querySelector(".left")
const right = document.querySelector(".right")

let angle = 0;
left.addEventListener("click", function(){
    angle -= 45;
    box.style.rotate = `${angle}deg`;
})

right.addEventListener("click", function(){
    angle += 45;
    box.style.rotate = `${angle}deg`;
})