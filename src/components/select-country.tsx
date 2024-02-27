import { Select } from "@mantine/core";

const SelectCountry = () => {
  return (
    <Select
      label="Country"
      placeholder="Jordan"
      data={["Jordan"]}
      searchable
      nothingFoundMessage="Nothing Found"
    />
  );
};

export default SelectCountry;
