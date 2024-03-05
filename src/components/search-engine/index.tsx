import { Button, Container, Flex } from "@mantine/core";

import SelectCountry from "@/components/select-country";
import SelectRegion from "@/components/select-region";
import SelectCarMake from "@/components/select-car-make";
import SelectDate from "@/components/select-data";

import { primaryGradient } from "@/constants";

import styles from "./styles.module.css";

const SearchEngine = () => {
  return (
    <Container className={styles.container} size="100%">
      <Flex
        gap={{ base: "sm", sm: "lg" }}
        direction={{ base: "column", sm: "row" }}
        justify="center"
        align={{ base: "stretch", sm: "flex-end" }}
      >
        <SelectCountry />
        <SelectRegion />
        <SelectCarMake />
        <SelectDate label="Pickup Date" />
        <SelectDate label="Return Date" />
        <Button variant="gradient" gradient={primaryGradient} miw="100px">
          Search
        </Button>
      </Flex>
    </Container>
  );
};

export default SearchEngine;
