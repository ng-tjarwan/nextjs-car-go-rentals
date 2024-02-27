import Link from "next/link";
import { Text } from "@mantine/core";

import { primaryGradient } from "@/constants";

const Logo = () => {
  return (
    <Text
      fz="lg"
      fw="bold"
      variant="gradient"
      gradient={primaryGradient}
      component={Link}
      href="/"
    >
      CarGo Rentals
    </Text>
  );
};

export default Logo;
