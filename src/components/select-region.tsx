"use client";

import { Select } from "@mantine/core";

import { optionsFilter } from "@/functions";
import { useRegions } from "@/hooks/useRegions";

interface SelectCountryProps {
  label?: React.ReactNode;
  value?: string;
  selectedCountryId?: number;
  onChange?: (value: string | null) => void;
}

const SelectRegion: React.FC<SelectCountryProps> = ({
  label,
  value,
  onChange,
  selectedCountryId,
}) => {
  const { regions, isLoading } = useRegions(selectedCountryId);

  return (
    <Select
      label={label || "Region"}
      placeholder="Amman"
      data={
        regions?.map((region) => ({
          label: region.name,
          value: region.id.toString(),
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

export default SelectRegion;
