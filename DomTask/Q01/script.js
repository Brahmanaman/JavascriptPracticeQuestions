let para = document.querySelector("p")
let btn = document.querySelector("button")

btn.addEventListener("click", function(){
    if(para.textContent === "Hello"){
        para.textContent = "Wellcome"
    }
    else{
        para.textContent = "Hello"
    }
})