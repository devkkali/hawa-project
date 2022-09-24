const mongoose = require('mongoose');
// var bcrypt = require('bcrypt');

const courseSchema = new mongoose.Schema({
    
    semester : {
        type: Number,
        required: true
    },
    program : {
        type : String,
        required : true,
        enum : ['Computer', 'Software', 'Electrical', 'Civil', 'Civil and Rural']
    },
    coursename : {
        type : String,
        required : true
    },
    courseID : {
        type : String,
        required: true,
        unique: true
    }
});

const Course = new mongoose.model("Course", courseSchema);

module.exports = Course;


