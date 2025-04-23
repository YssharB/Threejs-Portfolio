import About from "./Sections/About";
import Contact from "./Sections/Contact";
import Footer from "./Sections/Footer";
import Hero from "./Sections/Hero";
import Navbar from "./Sections/Navbar";
import Projects from "./Sections/Projects";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

const App = () => {
  return (
    <main className="max-w-7xl mx-auto relative">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <Analytics />
      <SpeedInsights />
    </main>
  );
};

export default App;
