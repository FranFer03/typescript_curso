"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
(() => {
    function infoCountry(country) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `https://restcountries.com/v3.1/name/${country}`;
            const resultado = document.getElementById("resultado");
            try {
                const result = yield fetch(url);
                if (!result.ok)
                    throw new Error("Country not found");
                const datos = yield result.json();
                const pais = datos[0];
                if (resultado) {
                    resultado.innerHTML = `
        <h2>${pais.name.official}</h2>
        <p>Capital: ${pais.capital[0]}</p>
        <p>Población: ${pais.population.toLocaleString()}</p>
        <p>Continente: ${pais.continents[0]}</p>
        <img src="${pais.flags.png}" alt="Bandera de ${pais.name.common}" width="200">
      `;
                }
            }
            catch (error) {
                if (resultado) {
                    resultado.innerHTML = `<p style="color:red;">Error: ${error}</p>`;
                }
            }
        });
    }
    // Call the function with a country name
    infoCountry("Russia");
})();
