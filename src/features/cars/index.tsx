"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import {
  Box,
  Button,
  Card,
  Container,
  Divider,
  Flex,
  Space,
  Title,
} from "@mantine/core";
import { IconBrandGoogleMaps } from "@tabler/icons-react";

import SearchEngine from "@/components/search-engine";
import ResetFiltersButton from "@/components/filters/reset-filters-button";
import PriceRangeFilter from "@/components/filters/price-range-filter";
import YearModelFilter from "@/components/filters/year-model-filter";
import TransmissionFilter from "@/components/filters/transmission-filter";
import BodyTypeFilter from "@/components/filters/body-types-filter";
import FuelTypeFilter from "@/components/filters/fuel-type-filter";
import FiltersDrawer from "@/components/filters-drawer";
import CarList from "./car-list";

import styles from "./styles.module.css";

const Map = dynamic(() => import("@/components/map"), { ssr: false });

const CarsLayout = () => {
  const [toggleShowMap, setToggleShowMap] = useState(false);

  return (
    <Container className={styles.parentContainer} size="xl" my="sm" py="md">
      {/* Search Engine */}
      <SearchEngine />

      <Flex justify="flex-end">
        {/* Hide Map | Show Map Button */}
        <Button
          className={styles.mapToggle}
          size="sm"
          variant="subtle"
          onClick={(prev) => setToggleShowMap(!toggleShowMap)}
        >
          <IconBrandGoogleMaps size="16px" />
          {toggleShowMap ? "Hide" : "Show"} Map
        </Button>
      </Flex>

      {/* Map */}
      {toggleShowMap && <Map height="200px" />}

      <Flex
        direction={{ base: "column", md: "row" }}
        className={styles.container}
      >
        {/* Filters Card */}
        <Card w={{ base: "100%", md: "350px" }}>
          <Flex align="center" justify="space-between">
            <Title order={4}>Filters</Title>
            <Box display={{ base: "none", md: "inline-block" }}>
              <ResetFiltersButton />
            </Box>

            <FiltersDrawer />
          </Flex>

          <Divider my={16} display={{ base: "none", md: "block" }} />

          <Box display={{ base: "none", md: "block" }}>
            <BodyTypeFilter />
            <PriceRangeFilter />
            <YearModelFilter />
            <TransmissionFilter />
            <Space my={"lg"} />
            <FuelTypeFilter />
          </Box>
        </Card>

        {/* Car List */}
        <CarList />
      </Flex>
    </Container>
  );
};

export default CarsLayout;
