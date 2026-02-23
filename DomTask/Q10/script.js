let red = document.querySelector(".red");
let yellow = document.querySelector(".yellow");
let green = document.querySelector(".green");

let redbtn = document.querySelector("#redBtn");
let yellowbtn = document.querySelector("#yellowBtn");
let greenbtn = document.querySelector("#greenBtn");

function resetLights(){
    red.style.backgroundColor = "rgba(255, 0, 0, 0.5)";
    yellow.style.backgroundColor = "rgba(255, 255, 0, 0.5)";
    green.style.backgroundColor = "rgba(0, 128, 0, 0.5)";
}

redbtn.addEventListener("click", function(){
    resetLights();
    red.style.backgroundColor = "rgb(255, 0, 0)";
});

yellowbtn.addEventListener("click", function(){
    resetLights();
    yellow.style.backgroundColor = "rgb(255, 255, 0)";
});

greenbtn.addEventListener("click", function(){
    resetLights();
    green.style.backgroundColor = "rgb(0, 128, 0)";
});