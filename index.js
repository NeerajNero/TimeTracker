// Select DOM elements
const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const stopButton = document.getElementById('stop');

// Timer variables
let timerInterval = null;
let startTime = null;
let elapsedTime = 0;

const formatTimer = (millisecond) => {
    const totalSeconds = Math.floor(millisecond/1000)
    const hours = Math.floor(totalSeconds/3600)
    const minutes = Math.floor((totalSeconds%3600)/60)
    const seconds = Math.floor(totalSeconds%60)

    return (`${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`)
}

const startTimer = () => {

    if(timerInterval){
        return
    }
    if(!startTime){
        startTime = Date.now() - elapsedTime
    }
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        timerDisplay.textContent = formatTimer(elapsedTime);
        console.log(elapsedTime)
    }, 1000);
    startButton.disabled = true
    stopButton.disabled = false
    pauseButton.disabled = false
}
const pauseTimer = () => {
    clearInterval(timerInterval)
    timerInterval = null
    pauseButton.disabled = true
    startButton.disabled = false
}

const stopTimer = () => {
    clearInterval(timerInterval)
    timerInterval = null;
    startTime = null
    elapsedTime = 0;
    startButton.disabled = false
    stopButton.disabled = true
    timerDisplay.textContent = '00:00:00'
}


// Event listeners
startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
stopButton.addEventListener('click', stopTimer);
