import { config } from "./config.js";

(() => {
  const api_key = config.OPENWEATHER_API_KEY;

  async function obtenerClima(ciudad: string): Promise<void> {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
      ciudad
    )}&units=metric&appid=${api_key}&lang=es`;

    const resultado = document.getElementById("resultado");

    try {
      const respuesta = await fetch(url);
      if (!respuesta.ok) {
        throw new Error("Ciudad no encontrada");
      }

      const datos = await respuesta.json();

      if (resultado) {
        resultado.innerHTML = `
        <h2>Clima en ${datos.name}, ${datos.sys.country}</h2>
        <ul>
          <li><strong>Temperatura:</strong> ${datos.main.temp} °C</li>
          <li><strong>Humedad:</strong> ${datos.main.humidity}%</li>
          <li><strong>Longitud:</strong> ${datos.coord.lon}</li>
          <li><strong>Latitud:</strong> ${datos.coord.lat}</li>
          <li><strong>Fecha:</strong> ${new Date(
            datos.dt * 1000
          ).toLocaleDateString()}</li>
        </ul>
      `;
      }
    } catch (error) {
      if (resultado) {
        resultado.innerHTML = `<p style="color:red;">Ocurrió un error: ${error}</p>`;
      }
    }
  }

  // Función que se llama desde el botón HTML
  function buscarClima() {
    const input = document.getElementById("ciudad") as HTMLInputElement;
    const ciudad = input.value.trim();
    if (ciudad) {
      obtenerClima(ciudad);
    }
  }

  (window as any).buscarClima = buscarClima;
})();
