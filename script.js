let running = false;
let time = 0;
let output = document.getElementById('output');

function start() {
    if (running == false) {
        running = true;
        increment();
    }
}

function pause() {
    running = false;
}

function reset() {
    running = false;
    time = 0;
    output.innerText = '00 : 00 : 00';
}

function increment() {
    if (running == true) {
        setTimeout(function () {
            time++;
            let secs = Math.floor(time / 10 % 60);
            let mins = Math.floor(time / 10 / 60);
            let hours = Math.floor(time / 10 / 60 / 60);

            if (secs < 10) {
                secs = '0' + secs;
            }
            if (mins < 10) {
                mins = '0' + mins;
            }
            if (hours < 10) {
                hours = '0' + hours;
            }

            output.innerHTML = `${hours} : ${mins} : ${secs}`;
            increment();
        }, 100)
    }
}