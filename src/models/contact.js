import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      // required: true,
    },
    email: {
      type: String,
      //   required: true,
      //   unique: true,
    },

    phoneNumber: {
      type: String,
      //   required: true,
      //   minlength: 6,
    },
    address: {
      type: String,
      // required: true,
      // minlength: 6,
    },
  },
  { timestamps: true }
);

const Contact = mongoose.model("Contact", contactSchema);

export default Contact;
