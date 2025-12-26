"use client";
import { motion } from "framer-motion";
import Image from "next/image";


export default function About() {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      
      {/* Soft Glow Background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-blue-500/20 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center relative z-10">

        {/* Left Text Block */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-snug">
            Professional Electrician in -
            <span className="text-cyan-400"> Chennai</span>
          </h2>

          <p className="text-gray-300 mt-4 leading-relaxed">
            providing reliable, safe, and high-quality electrical solutions for homes, offices, shops, apartments, and commercial spaces. 
            we deliver work that’s clean, safe, and built to last. 
            Every project is handled with care, precision and professional expertise.
          </p>
          <br></br>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-snug">
            Our 
            <span className="text-cyan-400"> Mission</span>
          </h2>
          <p className="text-gray-300 mt-4 leading-relaxed">
            To deliver safe, modern, and long-lasting electrical solutions with honesty, transparency, and reliability.
          </p>
          <br></br>

          <h2 className="text-3xl md:text-4xl font-bold text-white leading-snug">
            Our 
            <span className="text-cyan-400"> Values</span>
          </h2>
          <ul className="text-gray-300 mt-4 leading-relaxed">
            <li>Safety First</li>

<li>Quality Workmanship</li>
<li>On-Time Completion</li>
<li>Customer Satisfaction</li>
<li>Professional Service</li>

          </ul>
                    <br></br>

          <h2 className="text-3xl md:text-4xl font-bold text-white leading-snug">
            We 
            <span className="text-cyan-400"> Serve</span>
          </h2>
          <p className="text-gray-300 mt-4 leading-relaxed">
            Chennai & surrounding areas including:
Sithalapakkam, Medavakkam, Velachery, Sholinganallur, OMR, Tambaram, Thiruvanmiyur, Guindy, Pallavaram, Thiruporur</p>

          <div className="grid grid-cols-2 gap-6 mt-8">
            <div>
              <h3 className="text-3xl font-bold text-cyan-400">20+</h3>
              <p className="text-gray-400 text-sm">Years Experience</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-cyan-400">300+</h3>
              <p className="text-gray-400 text-sm">Happy Customers</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-cyan-400">450+</h3>
              <p className="text-gray-400 text-sm">Projects Completed</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-cyan-400">100%</h3>
              <p className="text-gray-400 text-sm">Safety Focused</p>
            </div>
          </div>
        </motion.div>

        {/* Right Image Card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative w-full max-w-[430px] mx-auto md:mx-0 rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_0_50px_rgba(0,255,255,0.12)]">
  <Image
    src="/images/owner4.png"   // your latest cyan background pic
    alt="Electrician Owner"
    width={430}
    height={530}
    className="rounded-3xl object-contain"
    priority
  />
</div>


          <motion.div
  className="absolute -bottom-6 -left-5 bg-black/70 border border-white/10 px-6 py-3 rounded-full backdrop-blur-xl w-max whitespace-nowrap shadow-[0_0_40px_rgba(0,255,255,0.25)]"
  animate={{ y: [0, -4, 0] }}
  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
>
  <p className="text-white font-semibold text-sm">
    Trusted & Professional Electrical Service
  </p>
</motion.div>

        </motion.div>

      </div>
    </section>
  );
}
