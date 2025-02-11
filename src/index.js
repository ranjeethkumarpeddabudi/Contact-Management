import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import { connectDB } from "./lib/db.js";
import Router from "./Routes/contact-route.js";
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/contacts", Router);

dotenv.config();
// const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  connectDB();
});
