import "dotenv/config";
import app from "./app.js";
import connectDB from "./config/db.js";

const port = 3000;

const startServer = async () => {
  try {
    await connectDB();
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (error) {
    console.error("server failed to start", error.message);
  }
};

startServer();
