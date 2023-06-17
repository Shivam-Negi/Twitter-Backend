import mongoose from "mongoose";

export const connect = async () => {
    await mongoose.connect('mongodb+srv://shivamnegi:shivam@cluster0.vf9ihnu.mongodb.net/');
}