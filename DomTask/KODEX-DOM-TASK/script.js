let main = document.querySelector("main")
let diceContainer = document.querySelector(".diceContainer")

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