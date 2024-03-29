"use client";

import { Avatar, Flex, Menu, Text } from "@mantine/core";
import Link from "next/link";
import { BiLogOutCircle } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { IoCarSportSharp, IoChevronDown } from "react-icons/io5";

import { logOut } from "@/services/auth.service";

import { useUserSessionContext } from "@/context/user-session-context";

const ProfileMenu = () => {
  const { user } = useUserSessionContext();

  const handleSignOut = async () => {
    await logOut();
  };

  return (
    <Menu shadow="md" width={220}>
      <Menu.Target>
        <Flex align="center" gap={8} variant="subtle" py="sm">
          <Avatar src="" radius="xl" />
          <IoChevronDown />
        </Flex>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Label>
          <Text lineClamp={1}>{user?.email}</Text>
        </Menu.Label>
        <Menu.Item
          component={Link}
          href="/my-account/profile"
          leftSection={<CgProfile size="0.8rem" />}
        >
          Profile
        </Menu.Item>
        <Menu.Item
          component={Link}
          href="/my-account/bookings"
          leftSection={<IoCarSportSharp size="0.8rem" />}
        >
          Bookings
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item
          component="button"
          type="button"
          role="button"
          color="red"
          leftSection={<BiLogOutCircle size="1rem" />}
          onClick={handleSignOut}
        >
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default ProfileMenu;
