import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URL)
        console.log("mongoDB is connected")
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

export default connectDB;



