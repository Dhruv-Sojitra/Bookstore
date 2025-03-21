import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import bookRoute from "./routes/book.routes.js";
const app = express();
dotenv.config();
app.use(cors());

const PORT = process.env.PORT || 4000;
const URI = process.env.MONGODBURI;

// Connect with Database
try {
  mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connect to mongodb");
} catch (err) {
  console.log(err);
}

//Defining Routes

app.use("/book", bookRoute);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
