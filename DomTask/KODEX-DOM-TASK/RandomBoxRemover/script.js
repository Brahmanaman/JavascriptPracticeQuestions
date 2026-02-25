let main = document.querySelector("main")
for (let i = 0; i < 5; i++) {
    let div = document.createElement("div")
    div.setAttribute("data-id", i + 1)
    div.style.height = "200px";
    div.style.width = "200px";
    div.style.background = "magenta";
    div.style.borderRadius = "10px";
    div.textContent = i + 1;
    div.onclick = removeDiv;
    main.appendChild(div)
}

function removeDiv() {
    let id = this.getAttribute("data-id");
    console.log("Removing box:", id);

    this.remove()
}