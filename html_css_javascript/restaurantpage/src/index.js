import './style.css';
import loadHomePage from './homepage';
import loadContactPage from './contactpage';
import loadMenuPage from './menupage';

const content = document.querySelector('#content')

const header = document.createElement('div');
header.classList.add('header');
content.appendChild(header);

const title = document.createElement('div');
title.classList.add('title');
title.textContent = 'Restaurant Page';
header.appendChild(title);

const browsingTab = document.createElement('div');
browsingTab.classList.add('browsingtab');
header.appendChild(browsingTab);

const textSection = document.createElement('div');
textSection.setAttribute('id', 'textsection');
loadHomePage(textSection);
content.appendChild(textSection);

const homeButton = document.createElement('button');
homeButton.textContent = 'Home';
browsingTab.appendChild(homeButton);
homeButton.onclick = function() {
    loadHomePage(textSection);
};

const menuButton = document.createElement('button');
menuButton.textContent = 'Menu';
browsingTab.appendChild(menuButton);
menuButton.onclick = function() { 
    loadMenuPage(textSection);
};

const contactButton = document.createElement('button');
contactButton.textContent = 'Contact';
browsingTab.appendChild(contactButton);
contactButton.onclick = function() {
    loadContactPage(textSection);
};
