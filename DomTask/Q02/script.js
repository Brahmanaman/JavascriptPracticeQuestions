let square = document.querySelector(".square")
let btn = document.querySelector("button")
let count = 1;

btn.addEventListener("click", function () {
    if (count == 1) {
        square.style.backgroundColor = "red"
    }
    else if (count == 2) {
        square.style.backgroundColor = "green"
    }
    else if (count == 3) {
        square.style.backgroundColor = "blue"
        count = 0;
    }
    count++;
})