const p = document.querySelector("p")
const inc = document.querySelector(".inc")
const dec = document.querySelector(".dec")

let num = 0;

inc.addEventListener("click", function(){
    num++;
    p.textContent = num;
})

dec.addEventListener("click", function(){
    num--;
    if(num < 0){
        num = 0;
        p.textContent = 0;
        return;
    }
    p.textContent = num;
})