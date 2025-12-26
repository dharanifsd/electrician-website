"use client";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <section className="min-h-screen bg-black py-24 px-6 flex justify-center">
      <div className="max-w-4xl w-full">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="text-white">Contact </span>
            <span className="text-cyan-400">Electrician in Chennai</span>
          </h1>

          <p className="text-gray-400 mt-3 text-lg">
            Reliable. Professional. Safe Electrical Services.
          </p>
        </motion.div>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-12 bg-gray-900/60 backdrop-blur-xl border border-gray-800 rounded-2xl p-10 text-center shadow-[0_0_30px_rgba(0,255,255,0.15)]"
        >
          <p className="text-gray-300 text-lg">
            Need a trusted electrician? We are just one call away.
          </p>

          <div className="mt-8 flex flex-col md:flex-row justify-center gap-6">

            <a
              href="tel:+919176493719"
              className="bg-cyan-500 text-black px-10 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 transition shadow-lg"
            >
              📞 Call Now
            </a>

            <a
              href="https://wa.me/919176493719?text=Hi%2C%20I%20need%20electrical%20service"
              target="_blank"
              className="border border-cyan-400 px-10 py-4 rounded-lg text-cyan-400 font-semibold text-lg hover:bg-cyan-400 hover:text-black transition"
            >
              💬 Chat on WhatsApp
            </a>
          </div>

          <div className="mt-8 text-gray-300 text-lg leading-relaxed">
            <p>📍 Chennai & Surrounding Areas</p>
            <p>🕒 Working Hours: 8 AM – 9 PM</p>
          </div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-gray-400"
        >
          <div className="border border-gray-800 p-4 rounded-xl bg-gray-900/50">
            ⭐ 20+ Years Experience
          </div>
          <div className="border border-gray-800 p-4 rounded-xl bg-gray-900/50">
            🛡 Safety Guaranteed
          </div>
          <div className="border border-gray-800 p-4 rounded-xl bg-gray-900/50">
            ⚡ Fast Response
          </div>
          <div className="border border-gray-800 p-4 rounded-xl bg-gray-900/50">
            👍 300+ Happy Customers
          </div>
        </motion.div>

      </div>
    </section>
  );
}
