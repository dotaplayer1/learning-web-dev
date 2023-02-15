function loadMenuPage(section) {
    section.textContent = '';

    const menutext = document.createElement('div');
    menutext.textContent = 'Water: $100';
    section.appendChild(menutext);

    const waterglass = document.createElement('img');
    waterglass.src = './images/waterglass.jpeg';
    waterglass.alt = 'Glass of water';
    section.appendChild(waterglass);
}

export default loadMenuPage;