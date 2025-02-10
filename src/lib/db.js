import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const db = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MONGODB connected at: ${db.connection.host}`);
  } catch (error) {
    console.log(`mongodb connection error  ${error}`);
  }
};
