import Joi from "joi";

const createContactSchema = Joi.object({
  name: Joi.string().min(3).max(50).required(),
  email: Joi.string().email().required(),
  phoneNumber: Joi.string()
    .pattern(/^[0-9]{10}$/)
    .required(),
  address: Joi.string().min(3).max(50).optional(),
});

export const validateCreateContact = (req, res, next) => {
  const { error } = createContactSchema.validate(req.body, {
    abortEarly: false,
  });

  if (error) {
    return res.status(400).json({
      error: "Invalid input",
      details: error.details.map((err) => err.message),
    });
  }
  next();
};
const updateContactSchema = Joi.object({
  name: Joi.string().min(3).max(50).optional(),
  email: Joi.string().email().optional(),
  phoneNumber: Joi.string()
    .pattern(/^[0-9]{10}$/)
    .optional(),
  address: Joi.string().min(3).max(50).optional(),
}).min(1);

export const validateUpdateContact = (req, res, next) => {
  const { error } = updateContactSchema.validate(req.body, {
    abortEarly: false,
  });

  if (error) {
    return res.status(400).json({
      error: "At least one field is required",
      details: error.details.map((err) => err.message),
    });
  }
  next();
};
