const mongoose = require('mongoose');

const marksSchema = new mongoose.Schema({
    sID : {
        type : String,
        required: true,
    }, 
    cID : {
        type : String,
        required : true
    },
    marks : {
        type : String,
    },
    res : {
        type : String,
        enum : ['pass', 'fail'] 
    }
});

const Mark = new mongoose.model("Mark", marksSchema);

module.exports = Mark;