import "dotenv/config";
import connectDB from "./config/db.js";
import User from "./modules/users/user.model.js";

const test = async () => {
  try {
    await connectDB();

    const user = await User.create({
      name: "Abdur Rahman",
      email: "abdur@example.com",
      password: 12345,
    });

    console.log("User created:", user);
  } catch (error) {
    console.error(error);
  }
};

test();