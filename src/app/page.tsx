// app/page.tsx
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import BackToTop from "./components/BackToTop";
import ScrollIndicator from "./components/ScrollIndicator";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <BackToTop />
      <ScrollIndicator />
    </main>
  );
}
