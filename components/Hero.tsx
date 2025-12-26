export default function Hero() {
  return (
    <section className="text-center py-24 bg-gradient-to-br from-black via-gray-900 to-black">
      <h1 className="text-5xl font-bold">
        Trusted <span className="text-cyan-400">Electrician in Chennai</span>
      </h1>
      <p className="mt-4 text-gray-400 max-w-xl mx-auto">
        We provide expert electrical services in Chennai for homes, offices, and commercial spaces with guaranteed safety, quality workmanship, and on-time completion.
      </p>
       

      <div className="mt-8 flex justify-center gap-4">
        <a
          href="/contact"
          className="px-6 py-3 bg-cyan-500 text-black rounded-lg"
        >
          Get Free Inspection
        </a>
        <a
          href="tel:+919176493719"
          className="px-6 py-3 border border-cyan-500 text-cyan-400 rounded-lg"
        >
          Call Now
        </a>
      </div>
    </section>
  );
}
