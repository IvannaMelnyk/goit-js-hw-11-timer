const refs = {
  days: document.querySelector('span[data-value="days"]'),
  hours: document.querySelector('span[data-value="hours"]'),
  mins: document.querySelector('span[data-value="mins"]'),
  secs: document.querySelector('span[data-value="secs"]'),
};

class CountdownTimer {
  constructor({ targetDate }) {
    this.targetDate = targetDate;
    this.start();
  }

  timerStart() {
    const currentTime = Date.now();
    const deltaTime = this.targetDate - currentTime;
    const time = this.getTimeComponents(deltaTime);

    this.updateClockFace(time);
  }

  start() {
    this.timerStart();

    setInterval(() => {
      this.timerStart();
    }, 1000);
  }

  updateClockFace({ days, hours, mins, secs }) {
    refs.days.textContent = `${days}`;
    refs.hours.textContent = `${hours}`;
    refs.mins.textContent = `${mins}`;
    refs.secs.textContent = `${secs}`;
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }

  getTimeComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
  }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Dec 25, 2020'),
});
