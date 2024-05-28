import {mongoose,connectDB} from './config/db'
import { functions } from './functions/Functions'
import { Ientorno,Ipruebas } from './interfaces/interfaces'
import { updateEntorno } from './functions/update';

const init = async () => {
    // Conectar a la base de datos
    await connectDB();
    // Crear un nuevo entorno y agregarlo al modelo de pruebas
    const entornos: Ientorno[]=[
        {
            id:20,
            descripcion:'ejemplo',
    
        },
        {
            id:12,
            descripcion:'entorno_12'
        }
    ]

    await functions.newEntorno(entornos);
    // Aquí puedes agregar lógica adicional si es necesario
};
const init_2 = async () => {
    // Conectar a la base de datos
    await connectDB();

    // Datos de prueba con entornos asociados
    const pruebaData = {
        id_test: 2,
        entornos: [
            { id: 101, descripcion: "Entorno de Prueba 1" },
        ]
    };

    // Agregar una nueva prueba con los entornos relacionados
    await functions.newPruebas(pruebaData);

    // Aquí puedes agregar lógica adicional si es necesario
};

const init_3 = async () => {
    // Conectar a la base de datos
    await connectDB();

    // Ejemplo de uso de updateEntorno
    await updateEntorno('pruebas', 2500, 2); // Actualiza el entorno del elemento con ID 1 en la colección Pruebas al entorno con ID 2

    // Aquí puedes agregar lógica adicional si es necesario
};
init_3();
//init_2()
//init()

