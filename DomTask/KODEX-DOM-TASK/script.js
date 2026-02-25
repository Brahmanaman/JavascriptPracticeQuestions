let main = document.querySelector("main")
let diceContainer = document.querySelector(".diceContainer")
let h1 = document.createElement("h1")

let leftdiv = document.createElement("div")
leftdiv.classList.add("leftdiv")
let leftimg = document.createElement("img")
leftimg.src = "./assets/dice1.png";
leftdiv.appendChild(leftimg)


let rightdiv = document.createElement("div")
rightdiv.classList.add("rightdiv")
let rightimg = document.createElement("img")
rightimg.src = "./assets/dice1.png";
rightdiv.appendChild(rightimg)


diceContainer.append(leftdiv)
diceContainer.append(rightdiv)



let btn = document.createElement("button")
btn.textContent = "Roll the dice";

main.appendChild(btn)
main.appendChild(h1)


btn.addEventListener("click", function () {
    h1.textContent = "";
    let rand1 = Math.floor(Math.random() * 6 + 1)
    leftimg.src = `./assets/dice${rand1}.png`;
    let rand2 = Math.floor(Math.random() * 6 + 1)
    rightimg.src = `./assets/dice${rand2}.png`;



    if (rand1 > rand2) {
        h1.textContent = "left one is winner"
    }
    else if (rand2 > rand1) {
        h1.textContent = "right one is winner"
    }
    else {
        h1.textContent = "match tied"
    }

})