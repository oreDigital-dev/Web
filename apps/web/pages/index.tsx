import { Button } from "ui";
import { useHelloQuery } from "../src/store/services/api";
import Hero from "../src/screens/home/hero";

export default function Web() {
  const { data } = useHelloQuery();

  return (
    <Hero />
  );
}
