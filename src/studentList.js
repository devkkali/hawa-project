const express = require('express');
const app = express();

const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/resultms", {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log("connection successful....."))
.catch((err) => console.log(err));

const Course = require('../models/courses');
const Program = require('../models/programs');
const Student = require('../models/students');
const Mark = require('../models/marks');

app.use(express.json());
app.use(express.urlencoded({extended: false}));

