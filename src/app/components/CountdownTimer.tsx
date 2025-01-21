"use client";
import React, { useState, useEffect } from "react";

const CountdownTimer: React.FC = () => {
  const targetDate = new Date("2025-01-17T00:00:00").getTime(); // Convert target date to timestamp

  const calculateTimeLeft = () => {
    const now = new Date().getTime(); // Get current timestamp
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Cleanup on component unmount
  }, []);

  return (
    <div className="flex gap-5 flex-wrap justify-center">
      <div className="flex justify-center bg-[#ffe5e5] min-w-20 p-4 text-2xl rounded-md text-[#B70B9D] text-center">
        {timeLeft.days}
        <br />D
      </div>
      <div className="flex justify-center bg-[#ffe5e5] min-w-20 p-4 text-2xl rounded-md text-[#B70B9D] text-center">
        {timeLeft.hours}
        <br />H
      </div>
      <div className="flex justify-center bg-[#ffe5e5] min-w-20 p-4 text-2xl rounded-md text-[#B70B9D] text-center">
        {timeLeft.minutes}
        <br />M
      </div>
      <div className="flex justify-center bg-[#ffe5e5] min-w-20 p-4 text-2xl rounded-md text-[#B70B9D] text-center">
        {timeLeft.seconds}
        <br />S
      </div>
    </div>
  );
};

export default CountdownTimer;
