import express from 'express';
const studentsRouter = express.Router();
import Student from '../models/Student.js';



studentsRouter.get("/", async (req, res) => {
    try {
        const response = await Student.find();
        res.json(response)

    } catch(err){
        res.status(500).json(err)
    }
})

studentsRouter.get("/:id", async (req, res) => {
    const {id} = req.params;
    try {
        const response = await Student.findById(id);
        res.json(response)

    } catch(err){
        res.status(500).json(err)
    }
})


studentsRouter.post("/", async (req, res) => {

    try {
        const {name, first_name, email} = req.body;
        const response = await Student.create({name, first_name, email});
        res.json(response)
    } catch(err){
        res.status(500).json(err)
    }
})


export default studentsRouter;
