let button = document.querySelector("button")
let main = document.querySelector("main")

button.addEventListener("click", function () {
    let div = document.createElement("div")
    // height and width
    let height = Math.floor(Math.random() * 200 + 1)
    let width = Math.floor(Math.random() * 200 + 1)

    let top = Math.floor(Math.random() * 100)
    let left = Math.floor(Math.random() * 100)

    // rgb color
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)

    div.style.height = height + "px";
    div.style.width = width + "px";
    div.style.top = top + "%";
    div.style.left = left + "%";

    div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
    div.classList.add("card")

    main.appendChild(div)
})