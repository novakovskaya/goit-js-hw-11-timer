import refs from './refs';

const PROMPT_DELAY = 1000;

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.intervalId = null;
  }

  start() {
    this.intervalId = setInterval(() => {
      const currentDate = Date.now();
      const startTime = this.targetDate - currentDate;

      const time = this.getTimeComponents(startTime);
      this.insertValues(time);
    }, PROMPT_DELAY);
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
    refs.days.textContent = days;
    refs.hours.textContent = hours;
    refs.mins.textContent = mins;
    refs.secs.textContent = secs;
  }
}

const blackFridayTimer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Nov 26, 2021'),
});

blackFridayTimer.start();
