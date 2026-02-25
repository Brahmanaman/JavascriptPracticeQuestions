let imgArr = ["https://images.pexels.com/photos/34870431/pexels-photo-34870431.jpeg",
    "https://images.pexels.com/photos/33473224/pexels-photo-33473224.jpeg",
    "https://images.pexels.com/photos/26829055/pexels-photo-26829055.jpeg",
    "https://images.pexels.com/photos/26829055/pexels-photo-26829055.jpeg",
    "https://images.pexels.com/photos/35162640/pexels-photo-35162640.jpeg"
]

let btn = document.querySelector("button")
let main = document.querySelector("main")

btn.addEventListener("click", function () {
    let idx = Math.floor(Math.random() * imgArr.length)
    let top = Math.floor(Math.random() * 100)
    let left = Math.floor(Math.random() * 100)

    let img = document.createElement("img")
    img.style.height = "200px";
    img.style.width = "200px";
    img.src = imgArr[idx];
    img.style.top = top + "%";
    img.style.left = left + "%"

    console.log(img.getAttribute("src"))
    main.appendChild(img)
})