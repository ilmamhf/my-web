import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import TechStack from "./sections/TechStack";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import AnimatedBackground from "./components/AnimatedBackground";

function App() {
  return (
    <div className="relative isolate bg-gradient-to-b from-bg-gradient-start to-bg-gradient-end text-text-main min-h-screen font-sans selection:bg-primary/30">
      {/* Background Layer */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <AnimatedBackground />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col">
        <Navbar />
        <main>
          <Hero />
          <TechStack />
          <Experience />
          <Projects />
          <Contact />
        </main>
      </div>
    </div>
  );
}

export default App;
