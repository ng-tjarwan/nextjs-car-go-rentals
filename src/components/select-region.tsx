import { Select } from "@mantine/core";

const SelectRegion = () => {
  return (
    <Select
      label="Region"
      placeholder="Amman"
      data={["Amman", "Zarqa", "Irbid", "Madaba", "Al Ramtha", "Mafraq"]}
      searchable
      nothingFoundMessage="Nothing Found"
    />
  );
};

export default SelectRegion;
