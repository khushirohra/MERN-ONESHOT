const mongoose=require('mongoose');
const Schema = mongoose.Schema;
const studentSchema=new Schema({
    Id:{
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3

    },
    Name:{
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
    },
    Batch:{
    type: Number,
    required: true,
    unique: false,
    trim: true,
    minlength: 4

    },
    College_Id:{
        type: String,
        required: true,
        unique: false,
        trim: true,
        minlength: 3
    },
    //Skills:{

    //},
},{
    timestamps: true,
});
const Student=mongoose.model('Student',studentSchema);
module.exports=Student;
