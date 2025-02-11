import express from "express";
import {
  newContact,
  getContacts,
  deleteContact,
  getUnique,
  updateContact,
} from "../Controllers/contact-controller.js";
const Router = express.Router();

Router.post("/", newContact);
Router.get("/", getContacts);
Router.delete("/:id", deleteContact);
Router.get("/:id", getUnique);
Router.put("/:id", updateContact);
export default Router;
