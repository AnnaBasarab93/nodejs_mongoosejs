import express from 'express';
const studentsRouter = express.Router();
import Student from '../models/Student.js';


//GET

studentsRouter.get("/", async (req, res) => {
    try {
        const response = await Student.find();
        res.json(response)

    } catch(err){
        res.status(500).json(err)
    }
})
//GET :id

studentsRouter.get("/:id", async (req, res) => {
    const {id} = req.params;

    try {
        const response = await Student.findById(id);
    if(!response){
        res.status(404).json({message : "Student doesn't found"})    
    }
    
    res.json(response)

    }catch(err){
        res.status(500).json(err)
    }
})

//POST
studentsRouter.post("/", async (req, res) => {
    try {
        const {name, first_name, email} = req.body;
        const response = await Student.create({name, first_name, email});
        res.json(response)
    } catch(err){
        res.status(500).json(err)
    }
})

//PUT /:id  :  To edit one user (with the id) 

studentsRouter.put("/:id", async (req, res) => {
    try {
        const {name, first_name, email} = req.body;
        const {id} = req.params;
        const response = await Student.findByIdAndUpdate(id, {name, first_name, email});

    if(!response){
            res.status(404).json({message : "Student doesn't found"})    
        }
        res.json(response)

    } catch(err){
        res.status(500).json(err)
    }
})

///PUT  : All name equal to John, change it to “Bob”

studentsRouter.put("/update/:name", async (req, res) => {
    try {
        const {name} = req.params;
        const {rename} = req.body;
        const response = await Student.updateMany( {name}, {name: rename} );
    if(response.modifiedCount > 0){
        const updateStudent = await Student.find({name: rename});
        res.json(updateStudent);
    }else{
        res.status(404).json({message : "Student doesn't found"});
    }
        
    } catch(err){
        res.status(500).json(err)
    }
})



//DELETE
studentsRouter.delete("/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const response = await Student.findByIdAndDelete(id);
        res.json(response)
    } catch(err){
        res.status(500).json(err)
    }
})


export default studentsRouter;
