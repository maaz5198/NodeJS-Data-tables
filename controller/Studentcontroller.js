import { validationResult } from "express-validator";
import student from "../models/studentmodel.js"
const studentcontroller ={
    async getAllstudent(req,res){
        try{
            const search = req.query.search || '';
            const sort = req.query.sort || '';
            const page = req.query.page || '1';
            const limit = req.query.limit || '5';
            const skip = (page - 1) * limit;

            let sortval =1;
            if (sort =='d' || sort == 'D') {
                sortval = -1 ;
            }

            const data = await student.find({name :{$regex : search,$options :'i'}})
            .skip(skip)
            .limit(limit)
            .sort({name :sortval})
            

            return res.status(200).json({message : "student data get successfully",data})
        }catch(error){
            return res.status(400).json({message :error.message})
        }
    },

    async createStudent(req,res){
        try{

            const error = validationResult(req);
            if(error.array().length !=0){
                return res.json(error.array());
            }

            const data = await student.create(req.body);
            return res.status(201).json({message : "created data successfully",data})
        }catch (error) {
            return res.status(480).json({message :error.message})
        }
    },

    async updatestudent(req,res){
        try{
            const {id} = req.params;
            let data = await student.findByIdAndUpdate({_id:id},req.body);
            return res.status(201).json({message : "created data successfully",data:{}})
        }catch (error) {
            return res.status(400).json({message :error.message})
        }
    },

    async changestudent(req,res){
        try{
            let data = await student.findOneAndReplace({_id:id},req.body);
            return res.status(201).json({message : "created data successfully",data:{}})
        }catch (error) {
            return res.status(400).json({message :error.message})
        }
    },



}
 export default studentcontroller;