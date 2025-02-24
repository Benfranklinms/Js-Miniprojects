let time1 = document.querySelector("#time1");
let format = document.querySelectorAll(".format");
let clocktime = document.querySelector(".clock");

let change = true;
let time24hr = "";
let time12hr = "";

const updateTime = () => {
    let now = new Date();
    let hr = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();
    let ampm = hr >= 12 ? "PM" : "AM";

    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    time24hr = `${hr}:${min}:${sec}`;
    let hr12 = hr % 12 || 12;
    time12hr = `${hr12}:${min}:${sec} ${ampm}`;
    clocktime.textContent = change ? time24hr : time12hr;

    }
    time1.addEventListener("click", () => {
        change = !change;
        updateTime();
    });

setInterval(updateTime, 1000);
updateTime();
