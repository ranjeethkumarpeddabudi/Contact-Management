import express from "express";
import {
  newContact,
  getContacts,
  deleteContact,
} from "../Controllers/contact-controller.js";
const Router = express.Router();

Router.post("/new-contact", newContact);
Router.get("/all-contacts", getContacts);
Router.delete("/delete-contact/:id", deleteContact);

export default Router;
