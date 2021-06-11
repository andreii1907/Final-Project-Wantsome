for (let teritory of listOfCountries){
    const country = document.createElement('option');
    const state = document.createElement('option');
    country.textContent = teritory.country;
    state.textContent = teritory.states;
    countries.appendChild(country);
    states.appendChild(state);
}
