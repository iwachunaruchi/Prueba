import exp from 'constants'
import {mongoose} from '../config/db'
import { Schema, Document } from 'mongoose';

//
export interface IEntorno extends Document {
    id: number;
    descripcion: string;
}
const EntornoSchema: Schema = new Schema({
    id: { type: Number, required: true },
    descripcion: { type: String, required: true }
});
//
export interface IPruebas extends Document {
    id_test: number;
    entorno: mongoose.Types.ObjectId[];  // Usamos ObjectId para referenciar documentos de Entorno
}

const PruebasSchema: Schema = new Schema({
    id_test: { type: Number, required: true },
    entorno: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Entorno' }]
});
//
const DesarrolloSchema = new mongoose.Schema({
    id:Number,
    descripcion: {type: mongoose.Schema.Types.ObjectId, ref:'Entorno'}
})
const ProduccionSchema = new mongoose.Schema({
    id:Number,
    descripcion: {type: mongoose.Schema.Types.ObjectId, ref:'Entorno'}
})

const Pruebas = mongoose.model<IPruebas>('Pruebas', PruebasSchema);
const Desarrollo = mongoose.model('Desarrollo', DesarrolloSchema);
const Produccion = mongoose.model('Produccion', ProduccionSchema);
const Entorno = mongoose.model<IEntorno>('Entorno', EntornoSchema);

export {Pruebas,Desarrollo,Produccion,Entorno}