"use client";

import { Select } from "@mantine/core";

import { useCountries } from "@/hooks/useCountries";

import { defaultCountry } from "@/constants";

import { optionsFilter } from "@/functions";

interface SelectCountryProps {
  label?: React.ReactNode;
  value?: string;
  onChange?: (value: string | null) => void;
}

const SelectCountry: React.FC<SelectCountryProps> = ({
  label,
  value,
  onChange,
}) => {
  const { countries, isLoading } = useCountries();

  return (
    <Select
      width="100%"
      label={label || "Country"}
      placeholder={defaultCountry}
      data={
        countries?.map((country) => ({
          label: country.name,
          value: country.id.toString(),
        })) || []
      }
      value={value}
      onChange={onChange}
      searchable
      nothingFoundMessage="Nothing Found"
      disabled={isLoading}
      maxDropdownHeight={280}
      filter={optionsFilter}
    />
  );
};

export default SelectCountry;
