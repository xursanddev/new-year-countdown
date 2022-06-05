const day = document.querySelector(".days");
const hour = document.querySelector(".hours");
const minute = document.querySelector(".minutes");
const second = document.querySelector(".seconds");

let [seconds, minutes, hours, days] = [0, 0, 0, 0];

function getTime() {
    let today = new Date();
    let newYear = new Date(today.getFullYear() + 1, 0, 1, 0, 0, 0);
    let different = newYear - today;
    seconds = Math.floor((different / 1000) % 60);
    minutes = Math.floor((different / 1000 / 60) % 60);
    hours = Math.floor((different / (1000 * 60 * 60)) % 24);
    days = Math.floor(different / (1000 * 60 * 60 * 24));
}

function getData() {
    second.innerHTML = seconds;
    minute.innerHTML = minutes;
    hour.innerHTML = hours;
    day.innerHTML = days;
}

let interval = setInterval(() => {
    getTime();
    getData();
}, 1000);

// Qor effekti
setInterval(createSnow, 100);

function createSnow(){
    const snow = document.createElement("i");
    snow.classList.add("fas");
    snow.classList.add("fa-snowflake");

    snow.style.left = Math.random() * window.innerWidth + "px";
    snow.style.animationDuration = Math.random() * 2 + 2 + "s";
    snow.style.opacity = Math.random(snow);
    snow.style.fontSize = Math.random * 10 + 10 + "px";
    document.body.append(snow);

    setTimeout(() => {
        snow.remove();
    }, 4000);
}