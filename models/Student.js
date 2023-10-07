import mongoose from "mongoose";
import validator from "validator";

const StudentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    first_name: {
        type: String,
        required: true
    },
    email:{
        type:String,
        validate:{
            validator: validator.isEmail,
            message: '{VALUE} is not a valid email',
            isAsync: false
            }
        }
    })
const Student = mongoose.model('Student', StudentSchema);

export default Student;