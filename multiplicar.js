// Requireds
const fs = require('fs');

let listarArchivo = (base, limite = 10) => {
    for (let i = 0; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        // Validar el dato ingresado
        if(!Number(base)) {
            reject(`El valor ingresado '${base}' no es un número !!'`);
            return
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`Tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err)
            else 
                resolve(`tabla-${base}.txt`)
        });
    })
}

module.exports = {
    crearArchivo,
    listarArchivo
}