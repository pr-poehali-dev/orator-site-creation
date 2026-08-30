import { useEffect, useState } from 'react';

interface CountdownTimerProps {
  targetDate: string;
  className?: string;
}

const getTimeLeft = (targetDate: string) => {
  const diff = new Date(targetDate).getTime() - Date.now();
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
  }
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    expired: false
  };
};

const CountdownTimer = ({ targetDate, className }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(targetDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  if (timeLeft.expired) {
    return null;
  }

  const units = [
    { value: timeLeft.days, label: 'дн' },
    { value: timeLeft.hours, label: 'ч' },
    { value: timeLeft.minutes, label: 'мин' },
    { value: timeLeft.seconds, label: 'сек' }
  ];

  return (
    <div className={`flex items-center gap-1.5 ${className || ''}`}>
      {units.map((u, idx) => (
        <div key={idx} className="flex items-baseline gap-0.5 bg-red-600 text-white rounded-md px-2 py-1 min-w-[2.75rem] justify-center">
          <span className="font-bold text-base tabular-nums">{String(u.value).padStart(2, '0')}</span>
          <span className="text-[10px] uppercase opacity-90">{u.label}</span>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
