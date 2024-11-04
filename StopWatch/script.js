let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timeRef = document.querySelector(".time");
let lapList = document.getElementById("laps-list"); // Lap list element
let int = null;

document.getElementById("start-timer").addEventListener("click", () => {
    if (int !== null) {
        clearInterval(int);
    }
    int = setInterval(displayTimer, 10); // 10ms interval for more precise timing
});

document.getElementById("pause-timer").addEventListener("click", () => {
    clearInterval(int); // Pause the timer
});

document.getElementById("reset-timer").addEventListener("click", () => {
    clearInterval(int);
    [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    timeRef.innerHTML = "00:00:00:000";
    lapList.innerHTML = ""; // Clear lap times
});

document.getElementById("lap-timer").addEventListener("click", () => {
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

    let lapTime = `${h}:${m}:${s}:${ms}`;
    let li = document.createElement("li");
    li.innerText = `Lap: ${lapTime}`;
    lapList.appendChild(li); // Add lap time to the list
});

function displayTimer() {
    milliseconds += 10;
    if (milliseconds == 1000) {
        milliseconds = 0;
        seconds++;

        if (seconds == 60) {
            seconds = 0;
            minutes++;

            if (minutes == 60) {
                minutes = 0;
                hours++;
            }
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

    timeRef.innerHTML = `${h}:${m}:${s}:${ms}`;
}
