import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import LocalNews from "./components/LocalNews";
import Sponsors from "./components/Sponsors";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <LocalNews />
      <Sponsors />
      <Footer />
    </main>
  );
}
