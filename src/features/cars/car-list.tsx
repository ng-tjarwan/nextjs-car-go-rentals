import { Box, Flex } from "@mantine/core";

import CarCard from "./car-card";

const CarList = () => {
  return (
    <Box w={{ base: "100%", md: "calc(100% - 300px" }}>
      <Flex wrap="wrap" justify="space-around" gap="md">
        <CarCard />
        <CarCard />
      </Flex>
    </Box>
  );
};

export default CarList;
