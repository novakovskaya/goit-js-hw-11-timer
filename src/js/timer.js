class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = document.querySelector(selector);
    this.targetDate = targetDate;
    this.intervalId = null;

    this.timerDays = this.selector.querySelector('[data-value="days"]');
    this.timerHours = this.selector.querySelector('[data-value="hours"]');
    this.timerMins = this.selector.querySelector('[data-value="mins"]');
    this.timerSecs = this.selector.querySelector('[data-value="secs"]');
  }

  start() {
    this.intervalId = setInterval(() => {
      const currentDate = Date.now();
      const startTime = this.targetDate - currentDate;

      const time = this.getTimeComponents(startTime);
      this.insertValues(time);
    }, 1000);
  }

  stop() {
    clearInterval(this.intervalId);
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }

  getTimeComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
  }

  insertValues({ days, hours, mins, secs }) {
    this.timerDays.textContent = days;
    this.timerHours.textContent = hours;
    this.timerMins.textContent = mins;
    this.timerSecs.textContent = secs;
  }
}

const blackFridayTimer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Nov 26, 2021'),
});

blackFridayTimer.start();
