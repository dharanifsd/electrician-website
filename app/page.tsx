import Hero from "../components/Hero";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Reviews from "../components/Reviews";

// import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Projects />
      <Reviews />
      {/* <Testimonials /> */}
      <CTA />
    </>
  );
//   export default function Home() {
//   return (
//     <div className="p-10 text-3xl text-red-400">
//       Testing Tailwind
//     </div>
//   );
// }

}
