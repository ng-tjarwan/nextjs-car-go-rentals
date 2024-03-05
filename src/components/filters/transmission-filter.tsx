import { SegmentedControl, Text } from "@mantine/core";

import { transmissionData } from "@/constants";

const TransmissionFilter = () => {
  return (
    <>
      <Text>Transmission</Text>
      <SegmentedControl color="pink" radius="lg" data={transmissionData} />
    </>
  );
};

export default TransmissionFilter;
