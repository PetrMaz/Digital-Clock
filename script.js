function calculateTime() {
var date = new Date();
var weekDay = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

//12hours format and using pm or am.
var hour=date.getHours();
var amPm = "AM";
if (hour>=12) {

    //fixing problem when there is 12:00afternoon to not switch to 0:00
 if (hour>12) {
     hour=hour-12;
 }
 amPm = "PM";  
}

//add zero in front of the number if the number is lesser then 10
var minute = date.getMinutes();
if (minute<10) {
minute = '0' + minute;
}
////add zero in front of the number if the number is lesser then 10
var second = date.getSeconds();
if (second <10) {
second = '0' + second;
}

//connecting HTML to JS inner build functions
document.getElementById("hour").innerHTML = hour;
document.getElementById("minute").innerHTML = minute;
document.getElementById("day").innerHTML = weekDay[date.getDay()];
document.getElementById("ampm").innerHTML = amPm;
document.getElementById("seconds").innerHTML = second;

//we are setting time when it is load again. 1000 = 1second.
setTimeout(calculateTime, 1000);

}
//our function is executed when the page is fully loaded
window.addEventListener('load', calculateTime)