import express from "express";
import { newContact, getContacts } from "../Controllers/contact-controller.js";
const Router = express.Router();

Router.post("/new-contact", newContact);
Router.get("/all-contacts", getContacts);

export default Router;
