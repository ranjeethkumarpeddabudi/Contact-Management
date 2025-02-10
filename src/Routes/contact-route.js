import express from "express";
import {
  newContact,
  getContacts,
  deleteContact,
  getUnique,
} from "../Controllers/contact-controller.js";
const Router = express.Router();

Router.post("/", newContact);
Router.get("/", getContacts);
Router.delete("/:id", deleteContact);
Router.get("/:id", getUnique);

export default Router;
