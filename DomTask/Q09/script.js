var btn = document.querySelector("button");
var para = document.querySelector("p");

btn.addEventListener("click", function () {
    para.textContent = "Button Clicked";
    btn.disabled = true;
    btn.textContent = "nikal ghode!";
});