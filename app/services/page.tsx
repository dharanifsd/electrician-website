"use client";
import Image from "next/image";
import { useState } from "react";

const images = [
  "/images/SiteDrawing.jpeg",
  "/images/SiteDrawing3.jpeg",
  "/images/sitemap.jpeg",
  "/images/BikeShowRoom.jpeg",
  "/images/cctv.webp",
  "/images/chandelier2.png",
  "/images/chandelier.png",  
  "/images/chandelier.jpeg",
  "/images/chandelier3.png",
  "/images/chandelier4.png",
  "/images/chandelier6.jpeg",
  "/images/chandelierDesign.jpeg",
  "/images/commercial.png",
  "/images/Compound.jpeg",
  "/images/DB inside.jpeg",  
  "/images/DB.jpeg",
  "/images/decor.jpeg",
  "/images/decorwall.jpeg",
  "/images/garden.jpeg",
  "/images/home_wiring.jpg",
  "/images/industrial.jpg",
  "/images/Main 3.jpeg",
  "/images/main.jpeg",  
  "/images/main4.jpeg",
  "/images/Map4.jpeg",
  "/images/Outdoor.jpeg",
  "/images/Out Lights.jpeg",
  "/images/pooja.jpeg",
  "/images/roof.jpeg",
  "/images/roof2.jpeg",
  "/images/Roof4.jpeg",  
  "/images/Roofwiring.jpeg",
  "/images/staircase.jpeg",
  "/images/staircase2.jpeg",
  "/images/wall.jpeg",
];

export default function ServicesPage() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section className="min-h-screen bg-black py-20 px-6">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl md:text-5xl font-bold text-center">
          <span className="text-white">Our </span>
          <span className="text-cyan-400">Electrical Work Gallery</span>
        </h1>

        <p className="text-gray-400 text-center mt-3">
          Real projects completed with safety, quality and perfection.
        </p>

        {/* Gallery Grid */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((img, index) => (
            <div
              key={index}
              className="group cursor-pointer rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-400 transition"
              onClick={() => setSelected(img)}
            >
              <Image
                src={img}
                width={400}
                height={300}
                alt="Electrical Project"
                className="w-full h-48 object-cover group-hover:scale-110 transition duration-300"
              />
            </div>
          ))}
        </div>

        {/* Lightbox Preview */}
        {selected && (
          <div
            className="fixed inset-0 bg-black/90 flex justify-center items-center z-50"
            onClick={() => setSelected(null)}
          >
            <Image
              src={selected}
              width={900}
              height={600}
              alt="Project Preview"
              className="rounded-xl border border-gray-700 shadow-lg"
            />
          </div>
        )}
      </div>
    </section>
  );
}
