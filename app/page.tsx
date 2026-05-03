import Header from "./components/Header";
import Hero from "./components/Hero";
import Project from "./components/Project";
import TapeSection from "./components/TapeSection";
import Testimonials from "./components/Testimonials";


export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Project />
      <TapeSection />
      <Testimonials />
    </div>
  )
}