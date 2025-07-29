import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import Cocktails from "./components/cocktails";
import About from "./components/About";

// Activating necessary GSAP plugins
gsap.registerPlugin(ScrollTrigger, SplitText);

export default function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
    </main>
  );
}
