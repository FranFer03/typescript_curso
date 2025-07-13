"use strict";
(() => {
    // Crear una función en TypeScript que reciba una lista de usuarios y devuelva solo aquellos que son mayores de edad (18 años o más).
    const filtrarMayoresDeEdad = (usuarios) => {
        return usuarios.filter(usuario => usuario.edad >= 18);
    };
    const listaUsuarios = [
        { nombre: "Ana", edad: 17 },
        { nombre: "Luis", edad: 21 },
        { nombre: "Carlos", edad: 15 },
        { nombre: "Lucía", edad: 30 },
    ];
    const mayores = filtrarMayoresDeEdad(listaUsuarios);
    console.log(mayores);
})();
