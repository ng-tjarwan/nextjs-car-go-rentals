"use client";

import {
  Center,
  SegmentedControl,
  Text,
  useMantineColorScheme,
} from "@mantine/core";
import { IconSun, IconMoon } from "@tabler/icons-react";

const ThemeSwitcher = () => {
  const { colorScheme, setColorScheme } = useMantineColorScheme();

  return (
    <SegmentedControl
      value={colorScheme}
      onChange={(value: any) => setColorScheme(value)}
      data={[
        {
          value: "light",
          label: (
            <Center>
              <IconSun size="1rem" stroke={1.5} />
              <Text ml="xm">Light</Text>
            </Center>
          ),
        },
        {
          value: "dark",
          label: (
            <Center>
              <IconMoon size="1rem" stroke={1.5} />
              <Text ml="xm">Dark</Text>
            </Center>
          ),
        },
      ]}
    />
  );
};

export default ThemeSwitcher;
