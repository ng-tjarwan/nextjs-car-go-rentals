import { Container } from "@mantine/core";
import dynamic from "next/dynamic";

import Hero from "./hero";

const Map = dynamic(() => import("@/components/map"), { ssr: false });

const Landing = () => {
  return (
    <>
      <Hero />
      <Container mt="-3rem" px="1rem" mb="2rem">
        <Map />
      </Container>
    </>
  );
};

export default Landing;
