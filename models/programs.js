const mongoose = require('mongoose');

const programSchema = new mongoose.Schema({
    pID : {
        type : String,
        required : true,
        enum : ['CMP', 'ELX', 'ELE', 'CIV', 'CRE', 'SOF']
    },
    pname : {
        type : String,
        required : true,
        enum : ['Computer Engineering', 'Electrical Engineering', 'Electrical and Electronics Engineering', 'Civil and Rural Engineering', 'Civil Engineering', ' Software Engineering']
    }
});

const Program = new mongoose.model("Program", programSchema);

module.exports = Program;