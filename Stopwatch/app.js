let startBtn = document.querySelector("#start");
let stopBtn = document.querySelector("#stop");
let resetBtn = document.querySelector("#reset");
let display = document.querySelector(".time")

let min = 0;
let sec = 0;
let msec = 0;

let internal = null;
let running = false;

const updateDisplay = () => {
    display.textContent = `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}:${String(msec).padStart(2, "0")}`
};

const startWatch = () => {
    if(!running){
        running = true;
        interval = setInterval(() => {
            msec++;
            if(msec >= 100){
                msec = 0;
                sec++;
            }
            else if(sec >= 60){
                sec = 0;
                min++;
            }
            updateDisplay()
        }, 10);
    }
};

const stopWatch = () => {
    clearInterval(interval);
    running = false;
}

const resetWatch = () => {
    running = false;
    clearInterval(interval);
    min = 0;
    sec = 0;
    msec = 0;
    updateDisplay();
}

startBtn.addEventListener("click", startWatch);
stopBtn.addEventListener("click", stopWatch);
resetBtn.addEventListener("click", resetWatch);