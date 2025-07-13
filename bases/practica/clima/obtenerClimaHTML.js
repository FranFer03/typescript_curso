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
    const api_key = "1e9e93412a754f11e3ef3bffab30c917";
    function obtenerClima(ciudad) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(ciudad)}&units=metric&appid=${api_key}&lang=es`;
            const resultado = document.getElementById("resultado");
            try {
                const respuesta = yield fetch(url);
                if (!respuesta.ok) {
                    throw new Error("Ciudad no encontrada");
                }
                const datos = yield respuesta.json();
                if (resultado) {
                    resultado.innerHTML = `
        <h2>Clima en ${datos.name}, ${datos.sys.country}</h2>
        <ul>
          <li><strong>Temperatura:</strong> ${datos.main.temp} °C</li>
          <li><strong>Humedad:</strong> ${datos.main.humidity}%</li>
          <li><strong>Longitud:</strong> ${datos.coord.lon}</li>
          <li><strong>Latitud:</strong> ${datos.coord.lat}</li>
          <li><strong>Fecha:</strong> ${new Date(datos.dt * 1000).toLocaleDateString()}</li>
        </ul>
      `;
                }
            }
            catch (error) {
                if (resultado) {
                    resultado.innerHTML = `<p style="color:red;">Ocurrió un error: ${error}</p>`;
                }
            }
        });
    }
    // Función que se llama desde el botón HTML
    function buscarClima() {
        const input = document.getElementById("ciudad");
        const ciudad = input.value.trim();
        if (ciudad) {
            obtenerClima(ciudad);
        }
    }
    window.buscarClima = buscarClima;
})();
