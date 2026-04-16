"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Blob 1 */}
      <motion.div
        className="absolute w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] bg-brand-orange/5 rounded-full blur-[100px]"
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -150, 100, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ top: '10%', left: '-10%' }}
      />
      
      {/* Blob 2 */}
      <motion.div
        className="absolute w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-[#FFCAB2]/10 rounded-full blur-[80px]"
        animate={{
          x: [0, -120, 80, 0],
          y: [0, 200, -100, 0],
          scale: [1, 0.8, 1.1, 1],
        }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ top: '60%', right: '-5%' }}
      />

      {/* Blob 3 */}
      <motion.div
        className="absolute w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] bg-brand-orange/5 rounded-full blur-[90px]"
        animate={{
          x: [0, 150, -100, 0],
          y: [0, 80, 150, 0],
        }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ bottom: '10%', left: '20%' }}
      />
    </div>
  );
}
