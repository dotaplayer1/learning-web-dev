function loadHomePage(section) {
    section.textContent = '';
    const homepagetext = document.createElement('div');
    homepagetext.textContent = 'the bestest coolest restaurant in the entire pacific ocean. We serve the most amazing water you could ever buy. Heck! We even got Gordon Ramsay here!';
    section.appendChild(homepagetext);

    const michelinstarchef = document.createElement('img');
    michelinstarchef.src = './images/gordonramsay.jpeg';
    michelinstarchef.alt = 'Chef Ramsay';
    section.appendChild(michelinstarchef);
}

export default loadHomePage;