const currentYear = document.getElementById('currentyear');

const lastModified = document.getElementById('lastModified');

currentYear.textContent = new Date().getFullYear();

lastModified.textContent = `Last modification: ${document.lastModified}`;


function calculateWindChill (temp, windSpeed) {

    if (temp <=50 && windSpeed >3) {
        return 35.74 + (0.6215 * temp) - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temp * Math.pow(windSpeed, 0.16);

    } else {
        return "N/A";
    }
}

const windChill = document.getElementById('windchill');

const temp = 48;
const windSpeed = 4;

windChill.textContent = calculateWindChill(temp,windSpeed);







