import mongoose from "mongoose";


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
        required: true, 
        unique: true, validate: {validator: function(v)
            {return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i.test(v);},
        message: props => `${props.value} is not a valid email address!`

        }}
    })
const Student = mongoose.model('Student', StudentSchema);

export default Student;