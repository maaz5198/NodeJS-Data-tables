import { Router } from "express";
import studentcontroller from "../controller/Studentcontroller.js";
import { validationResult } from "express-validator";
import validation from "../middlewear/validationmiddlewear.js";

const studentRouter = Router();
studentRouter.get('/',studentcontroller.getAllstudent)
studentRouter.post('/',validation, studentcontroller.createStudent)
studentRouter.patch('/:id',studentcontroller.updatestudent)
studentRouter.put('/:id',studentcontroller.changestudent)

export default studentRouter;