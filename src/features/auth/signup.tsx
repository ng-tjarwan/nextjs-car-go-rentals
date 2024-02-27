import Link from "next/link";
import {
  Anchor,
  Box,
  Button,
  Checkbox,
  Divider,
  Group,
  Paper,
  PasswordInput,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";

import GoogleButton from "./google-button";
import Logo from "@/components/navbar/logo";

import styles from "./styles.module.css";

const SignUp = () => {
  return (
    <Box px="md" py="xl">
      <Paper className={styles.formPaper} withBorder>
        <Text size="lg" fw={500}>
          Welcome to <Logo />
        </Text>
        <GoogleButton />
        <Divider
          label="Or continue with email"
          labelPosition="center"
          my="lg"
        />

        <form>
          <Stack>
            <TextInput
              required
              label="Email"
              placeholder="heelp@cargo.com"
              radius="md"
            />

            <PasswordInput
              required
              label="Password"
              placeholder="Your password"
              radius="md"
            />

            <PasswordInput
              required
              label="Confirm Password"
              placeholder="Confirm your password"
              radius="md"
            />

            <Checkbox label="I accept teams and conditions" />
          </Stack>

          <Group justify="space-between" mt="xl">
            <Anchor
              component={Link}
              href="/sign-in"
              type="button"
              c="dimmed"
              size="xs"
            >
              Already have an account? Login
            </Anchor>
            <Button type="submit" radius="xl">
              Sign up
            </Button>
          </Group>

          <Group mt="xl">
            <Anchor
              component={Link}
              href="/providers"
              type="button"
              c="dimmed"
              size="xs"
            >
              Want To Rent Your Car? Create Provider Account
            </Anchor>
          </Group>
        </form>
      </Paper>
    </Box>
  );
};

export default SignUp;
