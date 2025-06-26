import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("mongo db connected ")
}).catch(() => {
    console.log("connection error");
});

const todoSchema = new mongoose.Schema({
    title: String,
    description: String
});

const todo = mongoose.model("Todo", todoSchema);
export default todo;