(() => {
  async function infoCountry(country: string): Promise<void> {
    const url = `https://restcountries.com/v3.1/name/${country}`;
    const resultado = document.getElementById("resultado");
    try {
      const result = await fetch(url);
      if (!result.ok) throw new Error("Country not found");
      const datos = await result.json();
      const pais = datos[0];

      if (resultado) {
        resultado.innerHTML = `
        <h2>${pais.name.official}</h2>
        <p>Capital: ${pais.capital[0]}</p>
        <p>Población: ${pais.population.toLocaleString()}</p>
        <p>Continente: ${pais.continents[0]}</p>
        <img src="${pais.flags.png}" alt="Bandera de ${
          pais.name.common
        }" width="200">
      `;
      }
    } catch (error) {
      if (resultado) {
        resultado.innerHTML = `<p style="color:red;">Error: ${error}</p>`;
      }
    }
  }

  // Call the function with a country name
  infoCountry("Russia");
})();
