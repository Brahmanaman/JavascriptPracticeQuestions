let h2 = document.querySelector("h2")
let button = document.querySelector("button")
let p = document.querySelector("p")

button.addEventListener("click", function(){
    let randomNum = Math.floor(Math.random() * 10);
    if(randomNum > 7){
        p.textContent = "You Win! 🎉"
    }
    else{
        p.textContent = "Try Again 😢"
    }
})