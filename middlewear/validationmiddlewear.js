import { body } from "express-validator";

const validation = [
    
    body('name')
    .notEmpty()
    .withMessage("please enter your name"),

   body('email')
    .notEmpty()
    .withMessage("email is required")
]

export default validation;