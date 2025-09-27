import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PurposeSection from "./components/PurposeSection";
import ServicesSection from "./components/ServicesSection";
import TestimonialsSection from "./components/TestimonialsSection";

function App() {
  return (
    <main className="relative min-h-screen overflow-x-hidden font-sans">
      <div className="absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr  from-red-500/20 to-pink-500/20 rounded-full blur-[80px] -z-10 "></div>
      <div className="overflow-hidden">
        <Navbar />
        <Hero />
        <PurposeSection />
        <ServicesSection />
        <TestimonialsSection />
      </div>
    </main>
  );
}

export default App;
