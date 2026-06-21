import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Services from "./components/Services";
import FieldWork from "./components/FieldWork";
import Flatness from "./components/Flatness";
import Process from "./components/Process";
import Reports from "./components/Reports";
import FinalCta from "./components/FinalCta";
import Footer from "./components/Footer";
import ScrollBlurOnce from "./components/ScrollBlurOnce";

export default function Home() {
  return (
    <>
      <Nav />
      <ScrollBlurOnce />
      <main>
        <Hero />
        <Services />
        <FieldWork />
        <Flatness />
        <Process />
        <Reports />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
