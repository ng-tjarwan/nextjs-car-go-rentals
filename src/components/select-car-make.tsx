import { Select } from "@mantine/core";

const SelectCarMake = () => {
  return (
    <Select
      label="Car Make"
      placeholder="All"
      data={["All", "Toyota", "Nissan"]}
      searchable
      nothingFoundMessage="Nothing Found"
    />
  );
};

export default SelectCarMake;
