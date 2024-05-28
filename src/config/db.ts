
import mongoose from "mongoose";
connectDB().catch(err => console.log(err));


async function connectDB() {
    try {
        // URL de conexión a tu base de datos MongoDB
        const mongoURI = 'mongodb://127.0.0.1:27017/EXAMEN';
    
        // Conexión a la base de datos
        await mongoose.connect(mongoURI);
    
        console.log('Conexión exitosa a la base de datos MongoDB');
      } catch (error) {
        
      }
    
}
connectDB
export  {mongoose,connectDB};
