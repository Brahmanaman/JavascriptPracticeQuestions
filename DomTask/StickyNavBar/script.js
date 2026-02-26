let header = document.querySelector("header")

document.body.addEventListener("wheel", function (event) {
    if (event.deltaY > 0) {
        header.style.top = "-100px"
    }
    else {
        header.style.top = "0px"
    }
})