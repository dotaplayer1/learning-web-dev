function loadContactPage(section) {
    section.textContent = '';
    const text = document.createElement('div');
    text.textContent = 'Phone number: 123-456-7891\nLocation: look at map below';
    section.appendChild(text);

    const oceanpic = document.createElement('img');
    oceanpic.src = './images/ocean.png';
    oceanpic.alt = 'pacific ocean';
    section.appendChild(oceanpic);
}

export default loadContactPage;