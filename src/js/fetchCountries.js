﻿export function fetchCountries(searchName) {
    return fetch(`https://restcountries.com/v3.1/name/${searchName}?fields=name,capital,population,flags,languages`)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error(response.statusText);
        });
};