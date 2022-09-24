const express = require('express');
const app = express();

const bodyParser = require('body-parser'); // middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const hbs = require('hbs');
const path = require("path");
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/nitesh", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("connection successful....."))
    .catch((err) => console.log(err));

const staticPath = path.join(__dirname, "../public");
const scriptPath = path.join(__dirname, "../src");
const templatePath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

const Course = require('../models/courses');
const Program = require('../models/programs');
const Student = require('../models/Student');
const Admin = require('../models/admins');
const Mark = require('../models/marks');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


const port = process.env.PORT || 8000;
// var i = 0;

app.use(express.static(staticPath));
app.use(express.static(scriptPath));

app.set('view engine', 'hbs');
app.set("views", templatePath);
hbs.registerPartials(partialsPath);


// template engine route
app.get('/', (req, res) => {
    res.render('index')
});

app.get("/login", (req, res) => {
    res.render('login')
});

app.get("/admin", (req, res) => {
    res.render('admin', { username: 'Roshan' })
});


app.post("/admin", async (req, res) => {
    try {
        const password = req.body.password;

        const useremail = await Admin.findOne({ email: req.body.uName });
        if (useremail.password === password) {

            res.status(201).render("admin");
        } else {
            res.send("Invalid User Details");
        }

    } catch (error) {
        res.status(400).send("Invalid User Details");
    }
});

app.post("/register", async (req, res) => {
    try {
        const date = new Date();
        const year = date.getFullYear();

        const registerStudent = new Student({
            sID: req.body.regNum,
            rollNo: req.body.rollNo,
            fname: req.body.fname,
            mname: req.body.mname,
            lname: req.body.lname,
            year: year,
            semester: req.body.semester,
            pID: 'CMP'
        })

        await registerStudent.save();
        res.status(201).render('admin');

    } catch (error) {
        res.status(400).send('Duplicate data found')
    }
})

app.post("/adminregister", async (req, res) => {
    try {
        const registerAdmin = new Admin({
            email: req.body.email,
            password: req.body.pwd,
            username: req.body.uname
        })

        var cpwd = req.body.cpwd;

        if (cpwd == req.body.pwd) {
            console.log(cpwd);
            await registerAdmin.save();
            res.status(201).render('admin');

        } else {
            res.send(`Password doesn't match`);
        }

    } catch (error) {
        res.status(400).send(error);
    }
});

function searchStud() {
    const semester = req.body.semester;
    const program = req.body.program;

    app.post("/getData", async (req, res) => {

        try {

            const students = Student.find({
                $and: [
                    { pid: program },
                    { Semester: semester }
                ]
            });
            var n = students.count();

            for (var i = 0; i < n; i++) {
                console.log("Working");
            }

        } catch (error) {
            console.log("Error");
        }
    });
}

app.post("/showResult", async (req, res) => {

    // const sID = req.body.regNum;
    const sID = '2021-1-07-1042';



    const studentdata = await Student.findOne({
        sID: sID
    });

    // console.log( 'hi' );
    // res.end(studentdata.fname);

    res.render('showResult',{ studentdata: studentdata });
    // res.render('showResult');
});

app.get("*", (req, res) => {
    res.render('404', {
        errorcomment: "Oops! Page couldn't be found"
    });
});

app.listen(port, () => {
    console.log(`listening to the port no. ${port}`);
});