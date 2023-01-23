const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

content.style.cssText = "background-color: blue;";

const redtext = document.createElement("p");
container.appendChild(redtext);
redtext.textContent = "Hey I'm red!";
redtext.style.cssText = "color: red;";

const blueh3 = document.createElement("h3");
container.appendChild(blueh3);
blueh3.textContent = ("I'm a blue h3!");
blueh3.style.cssText = ("color: blue;");

const blackBorderDiv = document.createElement("div");
blackBorderDiv.style.cssText = ("border: 2px solid black; background-color: pink");
container.appendChild(blackBorderDiv);
blackBorderDiv.classList.add("blackBorderDiv");
const pinkBox = document.querySelector(".blackBorderDiv");

const h1 = document.createElement("h1");
pinkBox.appendChild(h1);
h1.textContent = ("I'm in a div");

const p = document.createElement("p");
pinkBox.appendChild(p);
p.textContent = ("ME TOO!");

const btn2 = document.querySelector("#btn2");
btn2.onclick = () => alert("button 2");

const btn3 = document.querySelector("#btn3");
btn3.addEventListener("click", () => {
    alert("button 3");
});

const btn4 = document.querySelector("#btn4");
btn4.addEventListener('keydown', function (e) {
    e.target.style.background = "blue";
});

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});