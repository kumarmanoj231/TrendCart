import mongoose from "mongoose";
import { configDotenv } from "dotenv";

const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('Successfully connected to DB Trendcart');
        
    } catch (error) {
        console.log(`ERROR : ${error.message}`);
        process.exit(1);
        
    }

}

export default connectDB;