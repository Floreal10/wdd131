const currentYear = document.getElementById('currentyear');

const lastModified = document.getElementById('lastModified');

currentYear.textContent = new Date().getFullYear();

lastModified.textContent = `Last modification: ${document.lastModified}`;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});