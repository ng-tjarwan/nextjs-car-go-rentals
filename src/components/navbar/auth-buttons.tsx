"use client";

import Link from "next/link";
import { Button, Group } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

import { primaryGradient } from "@/constants";
import { usePathname } from "next/navigation";

const excludedPAth = ["/login", "/signup"];

const AuthButtons = () => {
  const smallScreen = useMediaQuery("(max-width: 991px");
  const pathname = usePathname();

  return (
    <>
      {!excludedPAth.includes(pathname) && (
        <Group grow={smallScreen}>
          <Button variant="default" component={Link} href="/login">
            Log in
          </Button>
          <Button
            variant="gradient"
            gradient={primaryGradient}
            component={Link}
            href="/signup"
          >
            Sign up
          </Button>
        </Group>
      )}
    </>
  );
};

export default AuthButtons;
