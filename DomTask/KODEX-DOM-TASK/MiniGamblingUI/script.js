document.querySelector("button").addEventListener("click", function () {

    let num1 = Math.floor(Math.random() * 9 + 1);
    let num2 = Math.floor(Math.random() * 9 + 1);
    let num3 = Math.floor(Math.random() * 9 + 1);

    let main = document.querySelector("main");
    main.innerHTML = "";


    let h1 = document.createElement("h1");
    h1.textContent = num1;

    let h2 = document.createElement("h1");
    h2.textContent = num2;

    let h3 = document.createElement("h1");
    h3.textContent = num3;

    main.append(h1, h2, h3);

    let p = document.querySelector("body > p")

    if (!p) {
        p = document.createElement("p")
        document.body.appendChild(p)
    }

    if (num1 === num2 && num2 === num3) {
        p.textContent = "JackPot";
    } else {
        p.textContent = "";
    }

    document.body.appendChild(p);
});