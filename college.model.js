const mongoose=require('mongoose');
const Schema = mongoose.Schema;
const collegeSchema=new Schema({
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
    YearFounded:{
    type: Number,
    required: true,
    unique: false,
    trim: true,
    minlength: 4
    },
    City:{
        type: String,
        required: true,
        unique: false,
        trim: true,
        minlength: 3
    },
    State:{
        type: String,
        required: true,
        unique: false,
        trim: true,
        minlength: 3
    },
    Country:{
        type: String,
        required: true,
        unique: false,
        trim: true,
        minlength: 3
    },
    NoOfStudents:{
        type: Number,
        required: true,
        unique: false,
        trim: true,
        minlength: 4
    },
   /* Courses:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },*/
},{
    timestamps: true,
});

const College=mongoose.model('College',collegeSchema);
module.exports=College;
