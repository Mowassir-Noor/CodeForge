
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Countdown({ targetDate, isInView = true }) {

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const target = new Date(targetDate).getTime();
    const difference = target - now;

    if (difference <= 0) {
      return { days: "00", hours: "00", minutes: "00", seconds: "00" };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return {
      days: String(days).padStart(2, "0"),
      hours: String(hours).padStart(2, "0"),
      minutes: String(minutes).padStart(2, "0"),
      seconds: String(seconds).padStart(2, "0"),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const items = [
    { number: timeLeft.days, label: "Days" },
    { number: timeLeft.hours, label: "Hours" },
    { number: timeLeft.minutes, label: "Minutes" },
    { number: timeLeft.seconds, label: "Seconds" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ delay: 0.6 }}
      className="mt-12 flex justify-center gap-6"
    >
      {items.map((item) => (
        <div key={item.label} className="text-center">
          <p className="font-heading text-3xl md:text-4xl font-bold text-kintsugi-gold gold-glow">
            {item.number}
          </p>

          <p className="text-gray-500 text-xs uppercase tracking-wider mt-1">
            {item.label}
          </p>
        </div>
      ))}
    </motion.div>
  );
}

