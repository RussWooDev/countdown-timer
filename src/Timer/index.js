import { useEffect, useState } from "react";

// units
const SECONDS = 1000;
const MINUTES = 60 * SECONDS;
const HOURS = 60 * MINUTES;
const DAYS = 24 * HOURS;

function Timer({ duration, onExpire }) {
  const [time, setTime] = useState(duration);

  useEffect(() => {
    const TimerID = setTimeout(() => {
      setTime(time - 1000);
    }, 1000);

    if (time <= 0) {
      onExpire();
      clearTimeout(TimerID);
    }

    return () => {
      clearTimeout(TimerID);
    };
  }, [time, onExpire]);

  const formatTime = (time) => {
    const numDays = Math.floor(time / DAYS);
    const numHours = Math.floor((time % DAYS) / HOURS);
    const numMinutes = Math.floor((time % HOURS) / MINUTES);
    const numSeconds = Math.floor((time % MINUTES) / SECONDS);
    return `${numDays} : ${numHours} : ${numMinutes} : ${numSeconds}`;
  };

  return formatTime(time);
}

export default Timer;
