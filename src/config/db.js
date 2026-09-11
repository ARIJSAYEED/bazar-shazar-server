import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("mongodb connected successfully");
    console.log("Database:", mongoose.connection.name);
  } catch (error) {
    console.log("MongoDB connection failed:", error.message);
  }
};
export default connectDB;
