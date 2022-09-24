const timeBar = document.getElementById("timeBar");
const dateBar = document.getElementById("dateBar");

const time = document.getElementById('time');


let getCurrentDay = () => {
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    let currentTime = new Date();
    return(weekday[currentTime.getDay()]);
};

let getCurrentDate = () =>{
    var months = new Array(12);
    months[0] = 'January';
    months[1] = 'February';
    months[2] = 'March';
    months[3] = 'April';
    months[4] = 'May';
    months[5] = 'June';
    months[6] = 'July';
    months[7] = 'August';
    months[8] = 'September';
    months[9] = 'October';
    months[10] = 'November';
    months[11] = 'December';

    var currentDate = new Date();
    var month = months[currentDate.getMonth() + 1];
    var day = currentDate.getDate();

    return(`${month} ${day}`);
}

var now = new Date();
let year = now.getDate();

let hours = now.getHours();
let mins = now.getMinutes();

var periods = "";

if(hours<12){
    periods = "AM";    
}
else{
    periods = "PM";
    if(hours != 12){
        hours -= 12;
    }
}

if(mins < 10){
    mins = "0" + mins;
}

timeBar.innerHTML = `${hours}:${mins} ${periods} &emsp; &emsp; &emsp; &emsp;`;
dateBar.innerHTML = `${getCurrentDay()} &emsp; &emsp; &emsp; &emsp; ${getCurrentDate()}`;

// time.innerHTML = `${hours}:${mins} ${periods}  ||  ${getCurrentDay()}  ||  ${getCurrentDate()}`;