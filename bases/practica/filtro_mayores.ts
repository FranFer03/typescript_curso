(() => {

    // Crear una función en TypeScript que reciba una lista de usuarios y devuelva solo aquellos que son mayores de edad (18 años o más).

    interface Usuario {
        nombre: string;
        edad: number;
    }

    const filtrarMayoresDeEdad = (usuarios: Usuario[]): Usuario[] => {
        return usuarios.filter(usuario => usuario.edad >= 18);
    }

    const listaUsuarios: Usuario[] = [
        { nombre: "Ana", edad: 17 },
        { nombre: "Luis", edad: 21 },
        { nombre: "Carlos", edad: 15 },
        { nombre: "Lucía", edad: 30 },
    ];

    const mayores = filtrarMayoresDeEdad(listaUsuarios);
    console.log(mayores);

})();