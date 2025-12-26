"use client";
import { motion } from "framer-motion";

export default function Reviews() {
  const reviews = [
    {
  name: "Elango",
  text: "Romba professional electrician. Issue ah quick ah kandupidichu perfect ah fix pannanga. Highly recommended!",
  rating: 5,
},
{
  name: "Princy",
  text: "Inverterum wiring um neat ah install pannanga. Ellame clear ah explain pannitanga. Super service!",
  rating: 5,
},
{
  name: "Rahul",
  text: "On-time ah vandhu polite ah pesi commercial wiring safe ah mudichanga. Full ah worth!",
  rating: 5,
},

  //   const testimonials = [
  // {
  //   name: "Rahul",
  //   text: "On-time, polite and completed the commercial wiring safely. Value for money.",
  //   rating: 5,
  // },
  {
    name: "Karthik",
    text: "Professional work! Fixed my home wiring issues neatly and explained everything clearly.",
    rating: 5,
  },
  {
    name: "Sathish",
    text: "Very reliable service. They completed the full house wiring quicker than expected.",
    rating: 4,
  },
  {
    name: "Priya",
    text: "Excellent work quality and very friendly behaviour. Highly recommended!",
    rating: 5,
  },
  {
    name: "Ajith",
    text: "Solved my frequent power trip problem with proper inspection and rewiring.",
    rating: 5,
  },
  {
    name: "Dinesh",
    text: "Affordable pricing and professional service. They ensured full safety checks.",
    rating: 4,
  },
  {
  name: "Saravanan",
  text: "Work romba neat ah pannanga, timing ku vandhu install panitu safety ah explain pannitanga. Super service!",
  rating: 5,
},
{
  name: "Meena",
  text: "Service quality semma! Budget friendly ah irunthuchu and work perfect ah mudichanga. Fully satisfied!",
  rating: 5,
},

  {
    name: "Harini",
    text: "Quick response and clean installation of lights and switches in my new house.",
    rating: 5,
  },
  {
    name: "Vignesh",
    text: "Great electrical service experience. Would definitely recommend to friends and family.",
    rating: 5,
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
        Customer Reviews
      </motion.h2>

      <p className="text-gray-300 text-center mt-2">
        What our clients say about our work
      </p>

      <div className="grid md:grid-cols-3 gap-8 mt-10">
        {reviews.map((review, index) => (
          <motion.div
            key={index}
            className="border border-gray-700 rounded-xl p-6 bg-black/40 backdrop-blur-sm hover:border-cyan-400"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-yellow-400 text-lg">
              {"★".repeat(review.rating)}
            </p>

            <p className="text-gray-300 mt-3">
              “{review.text}”
            </p>

            <h3 className="mt-4 font-semibold text-white">
              — {review.name}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
