let startButton = document.getElementById('start');
let stopButton = document.getElementById('stop');
let resetButton = document.getElementById('reset');
let addButton = document.getElementById('add');
let reseListButton = document.getElementById('resetList');
let ulResults = document.querySelector('.results');

class Stopwatch {
    constructor(display) {
        this.running = false;
        this.display = display;
        this.reset();
        this.print(this.times);
        this.list = []
    }
    reset() {
        this.times = {
            minutes: 0,
            seconds: 0,
            miliseconds: 0
        };
    }
    resetList(){
        this.list = [];
        ulResults.innerHTML = ""
    }
    createLi(time){
        const li  = document.createElement('li')
        li.textContent = this.format(time)
        return li
    }
    resetClock(){
        this.stop();
        this.reset();
        this.print()
    }
    addTimeToList(){
        this.list.push(this.times)
        const lastLi = this.createLi(this.times)
        ulResults.appendChild(lastLi)
    }
    print() {
        this.display.innerText = this.format(this.times);
    }
    format(times) {
        return `${pad0(times.minutes)} : ${pad0(times.seconds)} : ${pad0(Math.floor(times.miliseconds))}`;
    }
    start() {
        if (!this.running) {
            this.running = true;
            this.watch = setInterval(() => this.step(), 10);
        }
    }
    step() {
        if (!this.running) return;
        this.calculate();
        this.print();
    }
    calculate() {
        this.times.miliseconds += 1;
        if (this.times.miliseconds >= 100) {
            this.times.seconds += 1;
            this.times.miliseconds = 0;
        }
        if (this.times.seconds >= 60) {
            this.times.minutes += 1;
            this.times.seconds = 0;
        }
    }
    stop() {
        this.running = false;
        clearInterval(this.watch);
    }
}
function pad0(value) {
    let result = value.toString();
    if (result.length < 2) {
        result = '0' + result;
    }
    return result;
}

const stopwatch = new Stopwatch(document.querySelector('.stopwatch'));

// listeners
startButton.addEventListener('click', () => stopwatch.start());
stopButton.addEventListener('click', () => stopwatch.stop());
resetButton.addEventListener('click', () => stopwatch.resetClock());
reseListButton.addEventListener('click', () => stopwatch.resetList());
addButton.addEventListener('click', () => stopwatch.addTimeToList());