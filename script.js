function start(){
    var date = new Date();

    var day = date.getDay() + "";
    var hour = date.getHours()+ "";
    var min = date.getMinutes()+ "";
    var sec = date.getSeconds()+ "";
    var dat = date.getDate("en-US","long");
    var month = date.getMonth()+1;
    var year = date.getFullYear();

    // date section
    document.querySelector("#date").innerHTML = dat+" / "+ month+" / "+year;
    // greeting
    var msg_ref = document.querySelector("#msg");
    if((hour >= 5 && hour <= 11) && (min <= 59) && (sec <= 59)){
        msg_ref.innerHTML = "<h3>Good Morning<h3/>";
        // console.log( msg_ref);
    }else if((hour >= 12 && hour <= 15) && (min <= 59) && (sec <= 59)){
        msg_ref.innerHTML = "<h3>Good Afternoon<h3/>";
        // console.log( msg_ref);
    }else if((hour >= 16 && hour <= 20) && (min <= 59) && (sec <= 59)){
        msg_ref.innerHTML = "<h3>Good Evening<h3/>";
        // console.log( msg_ref);
    }else{
        msg_ref.innerHTML = "<h3>Good Night<h3/>";
    }
    
    if(hour.length <= 1){
        hour = "0"+hour;
    }
    if(min.length <= 1){
        min = "0"+min;
    }
    if(sec.length <= 1){
        sec = "0"+sec;
    }
    // making 12 hour
    var meridian = "AM";
    if(hour > 12){
        hour = hour - 12;
        meridian = "PM"; 
    }
    // console.log(meridian);
    var day_of_week = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    day = day_of_week[day];


    var day_ref = document.querySelector("#day");
    var hour_ref = document.querySelector("#hour");
    var min_ref = document.querySelector("#minute");
    var sec_ref = document.querySelector("#second");
    var meridian_ref = document.querySelector("#meridian");

    day_ref.innerHTML = day;
    hour_ref.innerHTML = hour;
    min_ref.innerHTML = min;
    sec_ref.innerHTML = sec;
    meridian_ref.innerHTML = meridian;

    
}    
start();

var start_btn = document.querySelector(".start");
var stop_btn = document.querySelector(".stop");

var timeout;
start_btn.onclick = function(){
    timeout = setInterval(start,1000);
    stop_btn.style.backgroundColor = "transparent";
    stop_btn.style.color = "white";
    start_btn.style.backgroundColor = "#1A374D";
    start_btn.style.color = "white";

}
stop_btn.onclick = function(){
    clearInterval(timeout);
    start_btn.style.backgroundColor = "transparent";
    start_btn.style.color = "white";
    stop_btn.style.backgroundColor = "#1A374D";
    stop_btn.style.color = "white";
}
