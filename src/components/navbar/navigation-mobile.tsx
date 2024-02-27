"use client";

import { useDisclosure } from "@mantine/hooks";
import { Drawer, Button, Burger, Box, Center } from "@mantine/core";

import AuthButtons from "@/components/navbar/auth-buttons";
import Logo from "./logo";
import ThemeSwitcher from "./theme-switcher";

const NavigationMobile = () => {
  const [opened, { close, toggle }] = useDisclosure(false);

  return (
    <>
      <Drawer
        size="sm"
        radius="md"
        transitionProps={{ duration: 300, transition: "slide-right" }}
        opened={opened}
        onClose={close}
        title={<Logo />}
      >
        <AuthButtons />

        <Center hiddenFrom="sm" pos="fixed" bottom="0" w="90%" py={10}>
          <ThemeSwitcher />
        </Center>
      </Drawer>

      <Burger opened={opened} onClick={toggle} aria-label="Toggle navigation" />
    </>
  );
};

export default NavigationMobile;
