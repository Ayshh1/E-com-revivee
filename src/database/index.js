import mongoose from "mongoose";
import connectionUrl from "./secret";

const configOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connectToDB = async () => {

  mongoose
    .connect(connectionUrl, configOptions)
    .then(() => console.log("Ecommerce database connected successfully!"))
    .catch((err) =>
      console.log(`Getting Error from DB connection ${err.message}`)
    );
};

export default connectToDB;
