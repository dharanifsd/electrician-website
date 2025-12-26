"use client";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      
      {/* Organic Glow Shapes */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />

      <motion.div
        className="max-w-4xl mx-auto text-center backdrop-blur-xl bg-white/5 rounded-3xl p-12 relative shadow-[0_0_80px_rgba(0,200,255,0.15)]"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white leading-snug"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          Need an Electrician in Chennai Today? 
          <span className="text-cyan-400"> Get professional electrical help at your doorstep.</span>
        </motion.h2>

        <motion.p
          className="text-gray-300 mt-4 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Friendly service, expert workmanship, and complete peace of mind.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <a
            href="https://wa.me/9176493719?text=Hi%2C%20I%20need%20electrical%20service"
            target="_blank"
            className="px-7 py-3 rounded-full bg-cyan-400 text-black font-semibold hover:shadow-[0_0_35px_rgba(0,255,255,0.5)] transition"
          >
            WhatsApp Now
          </a>

          <a
            href="tel:+919176493719"
            className="px-7 py-3 rounded-full border border-white/30 text-white hover:bg-white/10 font-semibold transition"
          >
            Call Now
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
