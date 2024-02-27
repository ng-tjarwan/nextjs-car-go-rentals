"use client";

import Link from "next/link";
import { Button, Group } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

import { primaryGradient } from "@/constants";

const AuthButtons = () => {
  const smallScreen = useMediaQuery("(max-width: 991px");

  return (
    <Group grow={smallScreen}>
      <Button variant="default" component={Link} href="/sign-in">
        Log in
      </Button>
      <Button
        variant="gradient"
        gradient={primaryGradient}
        component={Link}
        href="/sign-up"
      >
        Sign up
      </Button>
    </Group>
  );
};

export default AuthButtons;
