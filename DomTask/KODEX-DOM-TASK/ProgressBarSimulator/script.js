let button = document.querySelector("button")
let progressbar = document.querySelector(".progress")


let progress = 0;
button.addEventListener("click", function () {
    let add = Math.floor(Math.random() * (30 - 10 + 1)) + 10;
    progress += add;
    if (progress > 100) progress = 100;
    progressbar.style.width = progress + "%"

})