'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function StarField() {
  const [stars, setStars] = useState<{ id: number; top: string; left: string; size: number; duration: number }[]>([]);

  useEffect(() => {
    const generatedStars = Array.from({ length: 100 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 3 + 2,
    }));
    setStars(generatedStars);
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#030014]">
      {/* Background Nebulas */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] nebula-gradient rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] nebula-gradient rounded-full" style={{ backgroundColor: 'var(--color-nebula-blue)' }} />
      
      {/* Stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute bg-white rounded-full opacity-70"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
          }}
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
