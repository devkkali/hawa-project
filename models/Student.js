const mongoose = require('mongoose');
// var bcrypt = require('bcrypt');

const studentSchema = new mongoose.Schema({
    sID : {
        type : String,
        required: true,
        unique: true
    },
    rollNo : {
        type : String,
        required: true,
        unique: true
    }, 
    fname : {
        type : String,
        required : true
    },
    mname : String,
    lname : {
        type : String,
        required: true
    },
    year : {
        type : Number,
        required : true
    },
    Semester : {
        type: Number,
        required: true,
        enum : [1, 2, 3, 4, 5, 6, 7, 8], 
        default : 1
    },
    pID : {
        type : String,
        required : true,
        enum : ['CMP', 'SOF', 'ELE', 'CIV', 'CRE', 'ELX']    
    }   
});

const Student = new mongoose.model("Student", studentSchema);

module.exports = Student;