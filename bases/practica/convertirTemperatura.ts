(() => {

    // Crear una función que convierta temperaturas de grados Celsius a Fahrenheit y viceversa.

    const convertirTemperatura = (valor: number, unidadOrigen: 'C' | 'F', unidadDestino: 'C' | 'F'): number => {
        if (unidadOrigen === 'C' && unidadDestino === 'F') {
            return (valor * 9 / 5) + 32; // Celsius a Fahrenheit
        } else if (unidadOrigen === 'F' && unidadDestino === 'C') {
            return (valor - 32) * 5 / 9; // Fahrenheit a Celsius
        } else {
            return valor; // Si las unidades son iguales, no se hace conversión
        }
    }

    // Ejemplo de uso

    console.log(convertirTemperatura(0, "C", "F"));    // Esperado: 32
    console.log(convertirTemperatura(100, "C", "F"));  // Esperado: 212
    console.log(convertirTemperatura(32, "F", "C"));   // Esperado: 0
    console.log(convertirTemperatura(20, "C", "C"));   // Esperado: 20


})();