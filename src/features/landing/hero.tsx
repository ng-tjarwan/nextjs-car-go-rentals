import { Container } from "@mantine/core";

import SearchEngine from "@/components/search-engine";

import Slider from "./slider";

import styles from "./styles.module.css";

const Hero = () => {
  return (
    <Container fluid pb="4rem" className={styles.hero}>
      <Slider />

      <Container pb="0.5rem">
        <SearchEngine />
      </Container>
    </Container>
  );
};

export default Hero;
