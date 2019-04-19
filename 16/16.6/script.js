var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = document.getElementById('countries');

function searchCountries() {
    var countryName = document.getElementById('country-name').value;
    if (!countryName.length) countryName = 'Poland';
    fetch(url + countryName)
        .then(function (resp) {
            if (resp.ok) {
                return resp.json();
            } else {
                return Promise.reject(resp)
            }
        })
        .then(showCountriesList)
        .catch(error => {
            console.log(error);
            countriesList.innerHTML = 'Brak wyników';
        })
}

function showCountriesList(resp) {
    countriesList.innerHTML = '';
    console.log(resp);
    const fragment = document.createDocumentFragment();
    resp.forEach(function (item) {
        var liEl = document.createElement('li');
        liEl.classList.add('country')
        liEl.innerHTML = `
        <div class="title">
            <h2 class="name">${item.name}</h2>
             <div class="img-wrap">
                <img src="https://www.countryflags.io/${item.alpha2Code}/shiny/64.png">
            </div>
        </div>
        <p class="capital">Capital: ${item.capital}</p>
        <p class="population">Population: ${item.population}</p>
        <p class="neighbours">Neighbouring countries number: ${item.borders.length}</p>
        `;
        fragment.appendChild(liEl);
    });
    countriesList.appendChild(fragment);
}








document.getElementById('search').addEventListener('click', searchCountries);