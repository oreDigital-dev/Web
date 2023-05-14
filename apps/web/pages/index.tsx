import { Button } from "ui";
import { useHelloQuery } from "../src/store/services/api";
import Hero from "../src/screens/home/hero";
import Services from "../src/screens/home/services";
import Process from "../src/screens/home/process";
import Team from "../src/screens/home/team";
import Impact from "../src/screens/home/impact";
import AboutUs from "../src/screens/home/aboutus";
import Footer from "../src/common/footer";

export default function Web() {
  const { data } = useHelloQuery();

  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Process />
      <Team />
      <Impact />
      <AboutUs />

      <Footer />
    </div>
  );
}
