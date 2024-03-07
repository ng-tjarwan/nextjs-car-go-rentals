import { MantineGradient } from "@mantine/core";

export const primaryGradient: MantineGradient = { from: "pink", to: "yellow" };

export const currency = "GH₵";
export const defaultCountry = "Ghana";

export const lowestPrice = 0;
export const hightestPrice = 10000;

export const lowestYearModel = 1990;
export const hightestYearModel = new Date().getFullYear() + 1;

export const transmissionData = [
  { value: "Any", label: "Any" },
  { value: "Automatic", label: "Automatic" },
  { value: "Manual", label: "Manual" },
];

export const fuelTypes = [
  { label: "Any", value: "Any" },
  { label: "Gasoline", value: "Gasoline" },
  { label: "Diesel", value: "Diesel" },
  { label: "LPG", value: "LPG" },
  { label: "CNG", value: "CNG" },
  { label: "Electric(EV)", value: "Electric" },
];
