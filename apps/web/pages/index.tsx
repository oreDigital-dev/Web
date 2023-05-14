import { Button } from "ui";
import { useHelloQuery } from "../src/store/services/api";
import Hero from "../src/screens/home/hero";
import Services from "../src/screens/home/services";
import Team from "../src/screens/home/team";
import Impact from "../src/screens/home/impact";

export default function Web() {
  const { data } = useHelloQuery();

  return (
    <>
      <Hero />
      <Services />
      <Team />
      <Impact />
    </>
  );
}
