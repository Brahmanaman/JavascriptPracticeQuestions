let input = document.querySelector("input")
let h1 = document.querySelector("h1")

input.addEventListener("input", function () {
    let val = Number(this.value)
    if (!val) {
        h1.textContent = ""
        return
    }
    let rand = Math.ceil(Math.random() * 50 + 1)
    console.log(rand, val)
    if (val == rand) {
        h1.textContent = "You Win"
    }
    else {
        h1.textContent = "You lose"
    }
})