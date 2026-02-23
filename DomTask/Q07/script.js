let pElement = document.querySelector("p");
document.querySelector("#textInput").addEventListener("input", function() {
    const inputValue = this.value;
    pElement.textContent = inputValue;
})