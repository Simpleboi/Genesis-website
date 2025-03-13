import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface StatProps {
  label: string;
  value: number;
  suffix?: string;
  duration?: number;
}

const AnimatedStat = ({
  label,
  value,
  suffix = "",
  duration = 2000,
}: StatProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);

      // Easing function for smoother animation
      const easeOutQuart = 1 - Math.pow(1 - percentage, 4);
      setCount(Math.floor(easeOutQuart * value));

      if (progress < duration) {
        animationFrame = requestAnimationFrame(updateCount);
      } else {
        setCount(value);
      }
    };

    animationFrame = requestAnimationFrame(updateCount);

    return () => cancelAnimationFrame(animationFrame);
  }, [value, duration]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="text-muted-foreground">{label}</div>
    </motion.div>
  );
};

const StatsBanner = () => {
  return (
    <section className="py-12 px-4 md:px-8 bg-primary/5">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <AnimatedStat label="Downloads" value={1250000} suffix="+" />
          <AnimatedStat label="GitHub Stars" value={28500} suffix="+" />
          <AnimatedStat label="Contributors" value={450} suffix="+" />
          <AnimatedStat
            label="Companies Using Genesis"
            value={3200}
            suffix="+"
          />
        </div>
      </div>
    </section>
  );
};

export default StatsBanner;
