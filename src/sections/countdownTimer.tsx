'use client';

import { deadlineDate } from '@/lib/deadline';
import dayjs, { Dayjs } from 'dayjs';
import utc from 'dayjs/plugin/utc.js';
import { useEffect, useState } from 'react';
dayjs.extend(utc);

interface CountdownTimerProps {
  targetDate: Dayjs;
  onComplete: () => void;
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate, onComplete }) => {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isCompleted, setIsCompleted] = useState(false);
  console.log('Is Completed:?', isCompleted);

  const deadlineInLocal = dayjs(deadlineDate).utcOffset(dayjs().utcOffset());
  const deadlineUtcOffset = deadlineInLocal.utcOffset() / 60;

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = dayjs(targetDate)
        .utcOffset(dayjs().utcOffset())
        .subtract(dayjs().toDate().getTime(), 'milliseconds')
        .toDate()
        .getTime();

      if (difference <= 0) {
        setIsCompleted(true);
        onComplete();
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate, onComplete]);
  return (
    <div className="h-screen bg-black">
      <div className="flex flex-col justify-center items-center min-h-screen px-4">
        <div className="bg-white w-full sm:w-3/4 md:w-1/2 rounded-lg shadow-lg">
          <div className="bg-gradient-to-r from-blue-800 to-cyan-500 p-5 flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8">
            <div className="text-center">
              <p className="text-sm sm:text-xl md:text-2xl text-white">HARI</p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl text-white font-extrabold">{timeLeft.days}</h1>
            </div>
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl text-white font-extrabold">:</h1>
            </div>
            <div className="text-center">
              <p className="text-sm sm:text-xl md:text-2xl text-white">JAM</p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl text-white font-extrabold">{timeLeft.hours}</h1>
            </div>
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl text-white font-extrabold">:</h1>
            </div>
            <div className="text-center">
              <p className="text-sm sm:text-xl md:text-2xl text-white">MENIT</p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl text-white font-extrabold">{timeLeft.minutes}</h1>
            </div>
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl text-white font-extrabold">:</h1>
            </div>
            <div className="text-center">
              <p className="text-sm sm:text-xl md:text-2xl text-white">DETIK</p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl text-white font-extrabold">{timeLeft.seconds}</h1>
            </div>
          </div>
          <div className="p-5 flex flex-col sm:flex-row gap-2 justify-between">
            <h1 className="text-black font-sans text-sm sm:text-xl font-semibold">
              PENGUMUMAN KELULUSAN SMAN 3 PALU 2025
            </h1>
            <p className="text-black font-sans text-sm sm:text-lg font-light self-end sm:self-auto">
              DIBUKA {deadlineInLocal.format('DD MMMM YYYY HH:mm:ss')}{' '}
              {deadlineUtcOffset === 8
                ? 'WITA'
                : deadlineUtcOffset === 7
                  ? 'WIB'
                  : deadlineUtcOffset === 9
                    ? 'WIT'
                    : `+${deadlineUtcOffset}`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
