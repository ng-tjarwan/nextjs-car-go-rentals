"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button, Group } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

import ProfileMenu from "../profile-menu";

import { useUserSessionContext } from "@/context/user-session-context";

import { primaryGradient } from "@/constants";

const excludedPAth = ["/login", "/signup"];

const AuthButtons = () => {
  const smallScreen = useMediaQuery("(max-width: 991px");

  const pathname = usePathname();
  const { session } = useUserSessionContext();

  return (
    <>
      {!excludedPAth.includes(pathname) && (
        <Group grow={smallScreen}>
          {session ? (
            <ProfileMenu />
          ) : (
            <>
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
            </>
          )}
        </Group>
      )}
    </>
  );
};

export default AuthButtons;
