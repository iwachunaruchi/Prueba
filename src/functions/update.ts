import { Entorno,Pruebas,Desarrollo,Produccion } from "../models/model";
import { Idesarrollo, Ipruebas, Iproduccion } from '../interfaces/interfaces';

const updateEntorno = async (entidad: string, idElemento: number, idEntorno: number) => {
    try {
        switch (entidad.toLowerCase()) {
            case 'desarrollo':
                // Actualizar el entorno en la colección Desarrollo
                await Desarrollo.updateOne({ 'entorno.id': idElemento }, { $set: { 'entorno.$.id': idEntorno } });
                console.log('Entorno actualizado en la colección Desarrollo');
                break;
            case 'pruebas':
                // Actualizar el entorno en la colección Pruebas
                await Pruebas.updateOne({ 'entorno.id': idElemento }, { $set: { 'entorno.$.id_test': idEntorno } });
                console.log('Entorno actualizado en la colección Pruebas');
                break;
            case 'produccion':
                // Actualizar el entorno en la colección Produccion
                await Produccion.updateOne({ 'entorno.id': idElemento }, { $set: { 'entorno.$.id': idEntorno } });
                console.log('Entorno actualizado en la colección Produccion');
                break;
            default:
                console.error('Nombre de entidad no válido.');
                break;
        }
    } catch (error) {
        console.error('Error al actualizar el entorno:', error);
    }
};

export { updateEntorno };
