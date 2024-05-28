import { Entorno,Pruebas } from "../models/model";
import { Ientorno,Ipruebas } from "../interfaces/interfaces";

const newEntorno = async (entornos: Ientorno[]) => {
    try {
        for (const entorno of entornos) {
            const { id, descripcion } = entorno;
            const newEntorno = new Entorno({ id, descripcion });
            await newEntorno.save();
        }
        console.log('Entornos guardados exitosamente.');
    } catch (error) {
        console.error('Error al guardar los entornos:', error);
    }
};
const newPruebas = async (pruebaData: { id_test: number, entornos: Ientorno[] }) => {
    try {
        // Primero, guarda todos los entornos y obtén sus IDs
        const entornoIds = await Promise.all(
            pruebaData.entornos.map(async (entorno) => {
                const newEntorno = new Entorno(entorno);
                await newEntorno.save();
                return newEntorno._id;
            })
        );

        // Luego, guarda el documento de Pruebas con las referencias a los entornos
        const newPrueba = new Pruebas({
            id_test: pruebaData.id_test,
            entorno: entornoIds
        });

        await newPrueba.save();
        console.log('Nueva prueba guardada:', newPrueba);
    } catch (error) {
        console.error('Error al guardar la prueba:', error);
    }
};
const functions = {
    newEntorno,
    newPruebas
}
export {functions}