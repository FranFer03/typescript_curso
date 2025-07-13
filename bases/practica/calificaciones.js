"use strict";
(() => {
    const resumenCalificaciones = (calificaciones) => {
        return {
            promedio: (calificaciones.reduce((a, b) => a + b, 0) / calificaciones.length).toFixed(2),
            maximo: Math.max(...calificaciones),
            minimo: Math.min(...calificaciones),
            cantidadAprobadas: calificaciones.filter(nota => nota >= 6).length,
        };
    };
    const notas = [10, 7, 4, 6, 8, 9, 2];
    const resumen = resumenCalificaciones(notas);
    console.log(resumen);
})();
