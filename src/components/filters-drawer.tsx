import { Button, Drawer, Flex, Space, Text, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconFilterCog } from "@tabler/icons-react";

import Logo from "./navbar/logo";
import ResetFiltersButton from "./filters/reset-filters-button";
import BodyTypeFilter from "./filters/body-types-filter";
import PriceRangeFilter from "./filters/price-range-filter";
import YearModelFilter from "./filters/year-model-filter";
import TransmissionFilter from "./filters/transmission-filter";
import FuelTypeFilter from "./filters/fuel-type-filter";

const FiltersDrawer = () => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        title={<Logo />}
        display={{ base: "inline-block", md: "none" }}
        position="top"
        size="xl"
        pt="100px"
        transitionProps={{
          transition: "slide-down",
        }}
      >
        <Flex align="center" justify="space-between">
          <Title order={4}>Filters</Title>
          <ResetFiltersButton />
        </Flex>

        <BodyTypeFilter />
        <PriceRangeFilter />
        <YearModelFilter />
        <TransmissionFilter />
        <Space my={"lg"} />
        <FuelTypeFilter />
      </Drawer>

      <Button
        onClick={open}
        variant="subtle"
        display={{ base: "inline-block", md: "none" }}
      >
        <IconFilterCog size="14px" />{" "}
        <Text component="span" mx={2}>
          Open Filters
        </Text>
      </Button>
    </>
  );
};

export default FiltersDrawer;
