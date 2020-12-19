const argv = require('./config/yargs').argv;

// Importar dentro del proyecto
const { crearArchivo, listarArchivo } = require('./multiplicar');

let comando = argv._[0];

// Ejecutar según comando recibido (Listar - Crear)

switch (comando) {
    case 'listar':
        listarArchivo(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(err => console.log(err))
        break;

    default:
        break;
}

console.log(comando, argv);
