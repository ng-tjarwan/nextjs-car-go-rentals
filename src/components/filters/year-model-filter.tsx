"use client";
import { RangeSlider, Text } from "@mantine/core";

import { lowestYearModel, hightestYearModel } from "@/constants";

const YearModelFilter = () => {
  return (
    <>
      <Text my={16}>Year</Text>
      <RangeSlider
        py={"xl"}
        min={lowestYearModel}
        max={hightestYearModel}
        labelAlwaysOn
        thumbSize={12}
        color="pink"
      />
    </>
  );
};

export default YearModelFilter;
