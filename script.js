document.addEventListener('DOMContentLoaded', function () {
    const countryContainer = document.getElementById('countryCards');

// Function to create Bootstrap card
function createCard(country) {
    const card = document.createElement('div');
    card.classList.add('col-lg-4', 'col-sm-12');

    card.innerHTML = `
        <div class="card">
            <div class="card-header">${country.name.common}</div>
            <div class="card-body">
                <p><strong>Capital:</strong> ${country.capital}</p>
                <p><strong>Region:</strong> ${country.region}</p>
                <p><strong>Country Codes:</strong> ${country.cca2}, ${country.cca3}</p>
                <p><strong>Latlng:</strong> ${country.latlng.join(', ')}</p>
                <img src="${country.flags.png}" alt="Flag" style="max-width: 100%; height: auto;">
                <button class="btn btn-primary" onclick="getWeather('${country.name.common}')">Click for Weather</button>
            </div>
        </div>
    `;

    countryContainer.appendChild(card);
}


    // Function to fetch countries data from Rest Countries API
    function fetchCountries() {
        fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then(countries => {
                countries.forEach(country => createCard(country));
            })
            .catch(error => console.error('Error fetching countries:', error));
    }

    // Function to fetch weather data from OpenWeatherMap API
    function getWeather(countryName) {
        // Replace 'YOUR_OPENWEATHERMAP_API_KEY' with your actual API key
        const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';
        
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${countryName}&appid=${apiKey}`)
            .then(response => response.json())
            .then(weatherData => {
                // Process weather data as needed
                console.log('Weather Data:', weatherData);
            })
            .catch(error => console.error('Error fetching weather data:', error));
    }

    // Fetch countries data on page load
    fetchCountries();
});
