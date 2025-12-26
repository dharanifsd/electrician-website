"use client";
import { motion } from "framer-motion";
import { 
  Wrench, 
  Home, 
  Building2, 
  ShieldCheck, 
  Camera, 
  Zap ,
  CircuitBoard
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Home size={38} />,
      title: "Home Electrical Wiring & Rewiring",
      desc: "Includes: Complete House Wiring, Rewiring Old Houses, Switchboard & Socket Installation, Lighting & Ceiling Fan Installation, Power Backup & Safety Checks",
    },
    {
      icon: <Zap size={38} />,
      title: "New House Electrical Setup",
      desc: "Complete electrical solutions with modern lighting systems.",
    },
    {
      icon: <Building2 size={38} />,
      title: "Commercial & Office Electrical Works",
      desc: "Includes: Commercial Wiring, Panel Board & MCB Setup, Office Lighting & Power Setup, Cable Management, Maintenance Contracts",
    },
    {
      icon: <Camera size={38} />,
      title: "CCTV & Smart Home Automation",
      desc: "Surveillance cameras, motion detection & complete security setup.",
    },
    {
      icon: <CircuitBoard size={38} />,
      title: "Inverter & UPS Setup",
      desc: "Inverter Installation, UPS Setup, Battery Connection, Safe Load Distribution",
    },
    {
      icon: <ShieldCheck size={38} />,
      title: "Switchboard & MCB Panel Works",
      desc: " Solar Support Setup, Smart Switches, Home Automation Setup",
    },
    // {
    //   icon: <Camera size={38} />,
    //   title: "Lighting Installation & Fixing",
    //   desc: "Surveillance cameras, motion detection & complete security setup.",
    // },
    // {
    //   icon: <ShieldCheck size={38} />,
    //   title: "Electrical Maintenance & Repairs",
    //   desc: "Fault fixing, maintenance, earthing & safety inspections.",
    // },
    // {
    //   icon: <Wrench size={38} />,
    //   title: "Inverter & Power Backup",
    //   desc: "Inverter, UPS, generator integration with professional setup.",
    // },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <motion.h2
        className="text-4xl font-bold text-center text-cyan-400"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Electrical Services in Chennai
      </motion.h2>

      <motion.p
        className="text-gray-300 text-center mt-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        Professional, reliable and high-quality electrical services.
        We proudly provide electrical services in: Sithalapakkam, Medavakkam, Velachery, Sholinganallur, OMR, Tambaram, Thiruvanmiyur, Guindy, Pallavaram, Thiruporur, and nearby locations.
      </motion.p>

      <div className="grid md:grid-cols-3 gap-8 mt-12">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="
              group relative 
              p-6 rounded-xl
              backdrop-blur-2xl
              bg-gradient-to-b from-black/70 via-black/60 to-black/40
              border border-cyan-400/20
              shadow-[0_0_25px_rgba(0,255,255,0.2)]
              hover:shadow-[0_0_35px_rgba(0,255,255,0.5)]
              transition-all duration-300
            "
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="text-cyan-400 mb-4">
              {service.icon}
            </div>

            <h3 className="text-white text-xl font-semibold">
              {service.title}
            </h3>

            <p className="text-gray-400 mt-2">
              {service.desc}
            </p>

            {/* <div className="mt-4 text-cyan-400 font-medium opacity-0 group-hover:opacity-100 transition">
              Learn More →
            </div> */}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
