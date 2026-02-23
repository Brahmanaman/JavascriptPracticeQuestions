document.getElementById("theme").addEventListener("click", function () {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
        this.textContent = "Dark"
        localStorage.setItem("theme", "dark")
    }
    else {
        this.textContent = "Light"
        localStorage.setItem("theme", "light")
    }
})


function onWindowLoad() {
    let theme = localStorage.getItem("theme");
    if (theme === "dark") {
        document.body.classList.add("dark")
        document.getElementById("theme").textContent = "Dark"
    }
    else {
        document.body.classList.add("light")
        document.getElementById("theme").textContent = "Light"
    }
}

onWindowLoad()