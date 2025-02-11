import express from "express";
import {
  newContact,
  getContacts,
  deleteContact,
  getUnique,
  updateContact,
} from "../Controllers/contact-controller.js";
import {
  validateCreateContact,
  validateUpdateContact,
} from "../middlewares/validator.js";
const Router = express.Router();

Router.post("/", validateCreateContact, newContact);
Router.get("/", getContacts);
Router.delete("/:id", deleteContact);
Router.get("/:id", getUnique);
Router.put("/:id", validateUpdateContact, updateContact);

export default Router;
