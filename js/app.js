//Returns the new year
const getNewYear = () => {
    const currentYear = new Date().getFullYear();
    return new Date (`January 01 ${currentYear + 1} 00:00:00`);
};

//Update the year element
const year = document.querySelector('.year');
year.innerHTML = getNewYear().getFullYear();

//Select elements
const app = document.querySelector('.countdown-timer');
const message = document.querySelector('.message');
const heading = document.querySelector('.h1');

const format = (t) => {
    return t < 10 ? '0' + t : t;
};

const render = (time) => {
    app.innerHTML = `
        <div class="count-down">
            <div class="timer">
                <h2 class="days">${format(time.days)}</h2>
                <small>Days</small>
            </div>
            <div class="timer">
                <h2 class="hours">${format(time.hours)}</h2>
                <small>Minutes</small>
            </div>
            <div class="timer">
                <h2 class="seconds">${format(time.seconds)}</h2>
                <small>Seconds</small>
            </div>
        </div>
        ;`
};

const showMessage = () => {
    message.innerHTML = `Happy New Year ${NewYear}!`;
    app.innerHTML = '';
    heading.style.display = 'none';
};

const hideMessage = () => {
    message.innerHTML = '';
    heading.style.display = 'block'
};

const complete = () => {
    showMessage();
    //Restart the countdown after showing 
    //the greeting for a day ()
    setTimeout(() => {
        hideMessage();
        countdownTimer.setExpiredDate(getNewYear());
    }, 1000 * 60 * 60 * 24);
};

const countdownTimer = new CountDown(
    getNewYear(),
    render,
    complete
);