"use client";
import { Box, Flex, NumberInput, RangeSlider, Text } from "@mantine/core";

import { lowestPrice, hightestPrice, currency } from "@/constants";

const PriceRangeFilter = () => {
  const labelFormatter = (value: number) => `${currency} ${value.toString()}`;

  return (
    <>
      <Text my={16}>Price Range</Text>
      <RangeSlider
        py={"xl"}
        step={10}
        min={lowestPrice}
        max={hightestPrice}
        labelAlwaysOn
        label={labelFormatter}
        thumbSize={12}
        color="pink"
      />

      <Flex gap={8}>
        <Box>
          <Text size="xs">Min.</Text>
          <NumberInput step={10} min={lowestPrice} max={hightestPrice} />
        </Box>
        <Box>
          <Text size="xs">Max.</Text>
          <NumberInput step={10} min={10} max={hightestPrice} />
        </Box>
      </Flex>
    </>
  );
};

export default PriceRangeFilter;
