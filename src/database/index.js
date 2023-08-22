import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const configOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connectToDB = async () => {
  const connectionUrl = process.env.URL;
  mongoose
    .connect(connectionUrl, configOptions)
    .then(() => console.log("Ecommerce database connected successfully!"))
    .catch((err) =>
      console.log(`Getting Error from DB connection ${err.message}`)
    );
};

export default connectToDB;
