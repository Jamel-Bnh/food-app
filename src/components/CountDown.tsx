"use client";
import React, { useState, useEffect } from "react";

const CountDown = () => {
  // Set a target date in the future (change this to your desired end date)
  const targetDate = new Date("2026-12-31");

  // Helper function that calculates the time left
  const getTimeLeft = () => {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    // If the target date has passed, return all zeros
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

  // Store the time left in state
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  // Update the countdown every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(timer);
  }, []);

  return (
    <span className="font-bold text-5xl text-yellow-300">
      {timeLeft.days}d : {timeLeft.hours}h : {timeLeft.minutes}m : {timeLeft.seconds}s
    </span>
  );
};

export default CountDown;