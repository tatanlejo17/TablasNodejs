// Importar un paquete

// Opciones en común
const opts = {
    base: {
        demandOption: true,
        alias: 'b'
    },
    limite: {
        default: 10,
        alias: 'l'
    }
};

const argv = require('yargs')
                .command('listar','Imprime en consola la tabla de multiplicar', opts)
                .command('crear','Genera un archivo de la tabla de multiplicar', opts)
                .help()
                .argv;

module.exports = {
    argv
}