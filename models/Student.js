import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    irst_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
})

const Student = mongoose.model('Student', StudentSchema);

export default Student;