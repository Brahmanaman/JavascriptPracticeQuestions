let box = document.querySelector(".box")

box.addEventListener("mouseenter", function(){
    box.setAttribute("style", "background-color:red")
})

box.addEventListener("mouseleave", function(){
    box.removeAttribute("style")
})