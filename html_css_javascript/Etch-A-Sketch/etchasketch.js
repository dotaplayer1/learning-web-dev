const container = document.querySelector(".container");

for (let i = 0; i < 1024; i++) {
    const div = document.createElement("div");
    container.appendChild(div);
    console.log(i);
}