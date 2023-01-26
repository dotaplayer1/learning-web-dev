const container = document.querySelector(".container");

for (let i = 0; i < 1024; i++) {
    const div = document.createElement("div");
    div.classList.add("white_background");
    div.addEventListener("mouseover", () => {
        div.classList.remove("white_background");
        div.classList.add("black_background");
    });
    container.appendChild(div);
    console.log(i);
}