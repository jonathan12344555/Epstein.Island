// Beispielhafte Länder und Flaggen für Europa
const countries = [
    { name: 'Deutschland', flag: 'germany.png', x: 100, y: 100, allies: [] },
    { name: 'Frankreich', flag: 'france.png', x: 200, y: 150, allies: [] },
    { name: 'Italien', flag: 'italy.png', x: 300, y: 200, allies: [] },
    { name: 'Spanien', flag: 'spain.png', x: 400, y: 250, allies: [] },
    // ... mehr Länder hinzufügen
];

function drawMap() {
    const map = document.getElementById('map');
    map.innerHTML = '';
    countries.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.style.position = 'absolute';
        countryDiv.style.left = `${country.x}px`;
        countryDiv.style.top = `${country.y}px`;
        countryDiv.style.width = '50px';
        countryDiv.style.height = '50px';
        countryDiv.style.backgroundImage = `url('flags/${country.flag}')`;
        countryDiv.style.backgroundSize = 'cover';
        countryDiv.style.border = '2px solid black';
        countryDiv.onclick = () => selectCountry(country);
        map.appendChild(countryDiv);
    });
}

let selectedCountry = null;

function selectCountry(country) {
    if (selectedCountry) {
        selectedCountry.style.border = '2px solid black';
    }
    selectedCountry = document.querySelector(`div[style="left: ${country.x}px; top: ${country.y}px;"]`);
    selectedCountry.style.border = '2px solid red';
}

function createAlliance() {
    if (!selectedCountry) return alert('Wähle ein Land aus!');
    const alliesList = selectedCountry.allies;
    const countryName = selectedCountry.style.backgroundImage.split('/')[1].split('.')[0];
    const allianceMembers = countries.filter(c => c.allies.includes(countryName));
    alert(`Land ${countryName} Bündnisse: ${alliesList.join(', ')}`);
}

function attack() {
    if (!selectedCountry) return alert('Wähle ein Land aus!');
    alert(`${selectedCountry.name} greift an!`);
}

drawMap();
