"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useMotionValue, useTransform } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Parallax Motion Setup
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [6, -6]);
  const rotateY = useTransform(x, [-100, 100], [-6, 6]);

  return (
    <nav className="z-50 w-full sticky top-0 backdrop-blur-2xl bg-black/40 border-b border-cyan-400/30 shadow-[0_0_20px_rgba(0,255,255,0.2)]">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4 relative z-50">

        <h1 className="text-xl font-bold text-cyan-400">
          D.K.Electricals
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-gray-300">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Gallery</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-3xl relative z-50"
        >
          {open ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Panel */}
      <div
        className={`md:hidden overflow-hidden transform transition-all duration-500 ease-in-out
        ${open ? "max-h-96 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-5"}
      `}
      >
        <motion.div
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            x.set(e.clientX - rect.left - rect.width / 2);
            y.set(e.clientY - rect.top - rect.height / 2);
          }}
          onMouseLeave={() => {
            x.set(0);
            y.set(0);
          }}
          className="
            px-6 py-6 flex flex-col space-y-5 text-gray-200 text-lg font-medium
            backdrop-blur-2xl 
            bg-gradient-to-b from-black/70 via-black/60 to-black/40
            border-t border-cyan-400/20 
            rounded-b-2xl
            animate-neonGlow shadow-[0_0_25px_rgba(0,255,255,0.3)]
          "
        >
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setOpen(false)}>About</Link>
          <Link href="/services" onClick={() => setOpen(false)}>Services</Link>
          <Link href="/projects" onClick={() => setOpen(false)}>Projects</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </motion.div>
      </div>
    </nav>
  );
}
