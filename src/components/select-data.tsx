import { DateInput, DateValue } from "@mantine/dates";

interface SelectDateProps {
  label?: React.ReactNode;
  value?: DateValue | Date;
  minDate?: Date;
  onChange?: (value: DateValue) => void;
}

const SelectDate: React.FC<SelectDateProps> = ({
  label,
  value,
  minDate,
  onChange,
}) => {
  return (
    <DateInput
      value={value}
      onChange={onChange}
      label={label}
      placeholder="Select Date"
      minDate={minDate}
      width="100%"
    />
  );
};

export default SelectDate;
