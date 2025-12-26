"use client";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Home Full Electrical Wiring",
      desc: "Completed full house wiring with safety inspection and load balancing.",
    },
    {
      title: "Commercial Office Lighting Setup",
      desc: "Installed modern LED lighting and power systems for office workspace.",
    },
    {
      title: "CCTV & Smart Security Installation",
      desc: "Setup CCTV surveillance and smart monitoring system for premises.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <motion.h2
        className="text-3xl font-bold text-center text-cyan-400"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Recent Projects
      </motion.h2>

      <motion.p
        className="text-gray-300 text-center mt-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Real work delivered with quality and safety.
      </motion.p>

      <div className="grid md:grid-cols-3 gap-8 mt-10">
        {projects.map((project, index) => (
            <motion.div
  key={index}
  className="border border-gray-700 rounded-xl p-6 hover:border-cyan-400 cursor-pointer bg-black/40 backdrop-blur-sm"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}

  animate={{
    y: [0, -10, 0],
    rotate: [0, 1.5, 0, -1.5, 0],
  }}

  transition={{
    duration: 6,
    ease: "easeInOut",
    repeat: Infinity,
  }}

  whileHover={{
    y: -15,
    scale: 1.05,
    rotate: 0,
    boxShadow: "0px 20px 60px rgba(0, 255, 255, 0.25)",
  }}
>
  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
  <p className="text-gray-400">{project.desc}</p>
</motion.div>


        ))}
      </div>
    </section>
  );
}
