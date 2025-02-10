import Contact from "../models/contact.js";

export const newContact = async (req, res) => {
  const { name, email, phoneNumber, address } = req.body;

  try {
    const dbContact = await Contact.findOne({ email });
    if (dbContact) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const newContact = new Contact({
      name,
      email,
      phoneNumber,
      address,
    });

    if (newContact) {
      await newContact.save();
      res.status(201).json({
        id: newContact._id,
        name: newContact.name,
        email: newContact.email,
        phoneNumber: newContact.phoneNumber,
        address: newContact.address,
      });
    } else {
      res.status(400).json({ error: "Invalid data" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getContacts = async (req, res) => {
  try {
    const allContacts = await Contact.find().select("-__v -updatedAt");

    if (allContacts) {
      return res.status(200).json({ allContacts });
    }
  } catch (error) {
    res.status(500).json({ error: "internal server error" });
  }
};

export const deleteContact = async (req, res) => {
  const { id } = req.params;

  try {
    const dbResponse = await Contact.findByIdAndDelete(id);
    if (dbResponse) {
      return res.status(200).json({
        message: `contact with id : ${dbResponse._id} deleted successfully`,
      });
    } else {
      res.status(400).json({ message: "User does not exists" });
    }
  } catch (error) {
    res.status(500).json({ error: "internal server error" });
  }
};

export const getUnique = async (req, res) => {
  const { id } = req.params;
  try {
    const dbResponse = await Contact.findById(id).select("-__v");
    if (dbResponse) {
      return res.status(200).json(dbResponse);
    } else {
      res.status(400).json({ message: "User does not exists" });
    }
  } catch (error) {
    res.status(500).json({ error: "internal server error" });
  }
};
