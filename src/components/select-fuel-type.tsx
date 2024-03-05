"use client";

import { Select } from "@mantine/core";

import { fuelTypes } from "@/constants";

import { optionsFilter } from "@/functions";

interface SelectFuelTypeProps {
  label?: React.ReactNode;
  value?: string;
  onChange?: (value: string | null) => void;
  addAny?: boolean;
  required?: boolean;
}

const SelectFuelType: React.FC<SelectFuelTypeProps> = ({
  label,
  value,
  onChange,
  addAny,
  required = false,
}) => {
  return (
    <Select
      width="100%"
      label={label || "Fuel Type/EV"}
      placeholder="Gasoline"
      value={value}
      onChange={onChange}
      data={fuelTypes}
      searchable
      maxDropdownHeight={280}
      required={required}
      nothingFoundMessage="Nothing Found"
      filter={optionsFilter}
    />
  );
};

export default SelectFuelType;
