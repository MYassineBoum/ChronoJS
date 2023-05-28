let h=0, m=0, s=0, interval;

let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");
let time = document.getElementsByTagName("span");

function timer() {
    s++;
    if(s == 60) {
        s = 0;
        m++;
    }
    if(m == 60) {
        m = 0;
        h++;
    }
    time[0].innerHTML = h+"h";
    time[1].innerHTML = m+"m";
    time[2].innerHTML = s+"s";
};

start.addEventListener("click", () => {
    timer();
    interval = setInterval(timer, 1000);
    start.disabled = true;
    stop.disabled = false;
    reset.disabled = false;
});

stop.addEventListener("click", () => {
    clearInterval(interval);
    start.disabled = false;
    stop.disabled = true;
    reset.disabled = false;
});

reset.addEventListener("click", () => {
    clearInterval(interval);
    start.disabled = false;
    stop.disabled = false;
    reset.disabled = true;
    h = 0;
    m = 0;
    s = 0;
    time[0].innerHTML = h+"h";
    time[1].innerHTML = m+"m";
    time[2].innerHTML = s+"s";
});