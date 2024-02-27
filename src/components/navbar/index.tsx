import { Box, Group } from "@mantine/core";

import Logo from "@/components/navbar/logo";
import AuthButtons from "@/components/navbar/auth-buttons";
import ThemeSwitcher from "@/components/navbar/theme-switcher";

import styles from "./styles.module.css";
import NavigationMobile from "./navigation-mobile";

const Navbar = () => {
  return (
    <Box className={styles.header}>
      <Group justify="space-between" h="100%">
        <Logo />
        <Box visibleFrom="md">
          <AuthButtons />
        </Box>
        <Box visibleFrom="sm">
          <ThemeSwitcher />
        </Box>

        <Box hiddenFrom="md">
          <NavigationMobile />
        </Box>
      </Group>
    </Box>
  );
};

export default Navbar;
