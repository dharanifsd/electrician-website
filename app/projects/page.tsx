"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Home Full Wiring",
      desc: "Complete residential wiring with safety inspection.",
      img: "/images/home_Wiring.jpg",
    },
    {
      title: "Office Lighting Installation",
      desc: "Installed modern chandelier setup for workspace.",
      img: "/images/chandelier6.jpeg",
    },
    {
      title: "Commercial site Work",
      desc: "LED strip lights installation.",
      img: "/images/commercial.png",
    },
    {
      title: "CCTV Installation",
      desc: "Complete surveillance setup with monitoring system.",
      img: "/images/cctv.webp",
    },
    {
      title: "Industrial Wiring",
      desc: "Professional industrial electrical wiring done safely, efficiently, and built to handle heavy-duty operations.",
      img: "/images/industrial.jpg",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <motion.h1
        className="text-4xl font-bold text-center text-cyan-400"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Completed Projects
      </motion.h1>

      <p className="text-gray-300 text-center mt-2">
        A glimpse of the work we’ve proudly delivered
      </p>

      <div className="mt-12">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {projects.map((project, i) => (
            <SwiperSlide key={i}>
              <motion.div
                className="relative rounded-xl overflow-hidden border border-gray-700 bg-black/40"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="h-64 w-full object-cover"
                />

                <div className="absolute inset-0 bg-black/70 opacity-0 hover:opacity-100 transition flex flex-col justify-center items-center text-center px-4">
                  <h3 className="text-cyan-400 text-xl font-semibold">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mt-2">{project.desc}</p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
