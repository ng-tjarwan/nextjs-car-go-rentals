"use client";
import { Button, Container, Flex } from "@mantine/core";

import SelectCountry from "@/components/select-country";
import SelectRegion from "@/components/select-region";
import SelectCarMake from "@/components/select-car-make";
import SelectDate from "@/components/select-data";

import { useCountries } from "@/hooks/useCountries";
import { useRegions } from "@/hooks/useRegions";

import { useAppContext } from "@/context/app-context";

import { primaryGradient } from "@/constants";

import styles from "./styles.module.css";

const SearchEngine = () => {
  const {
    state: { country, region },
    setCountry,
    setRegion,
  } = useAppContext();

  const { countries } = useCountries();
  const { regions } = useRegions(country?.id);

  const handleCountryChange = (value: string | null) => {
    const country = countries?.find(
      (country) => country.id.toString() === value
    );
    console.log("selectedCountry", country);
    setCountry(country!);
  };

  const handleRegionChange = (value: string | null) => {
    const region = regions?.find((region) => region.id.toString() === value);
    console.log("selectedRegion", region);
    setRegion(region!);
  };

  return (
    <Container className={styles.container} size="100%">
      <Flex
        gap={{ base: "sm", sm: "lg" }}
        direction={{ base: "column", sm: "row" }}
        justify="center"
        align={{ base: "stretch", sm: "flex-end" }}
      >
        <SelectCountry
          value={country?.id.toString()}
          onChange={handleCountryChange}
        />

        <SelectRegion
          value={region?.id.toString()}
          onChange={handleRegionChange}
          selectedCountryId={country?.id}
        />

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
