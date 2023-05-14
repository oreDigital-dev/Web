import { Button } from "ui";
import { useHelloQuery } from "../src/store/services/api";
import Hero from "../src/screens/home/hero";
import Services from "../src/screens/home/services";
import Process from "../src/screens/home/process";

export default function Web() {
  const { data } = useHelloQuery();

  return (
    <>
      <Hero />
      <Services />
      <Process />
    </>
  );
}
