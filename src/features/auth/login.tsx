import Link from "next/link";
import {
  Anchor,
  Box,
  Button,
  Divider,
  Group,
  Paper,
  PaperProps,
  PasswordInput,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";

import GoogleButton from "./google-button";

import styles from "./styles.module.css";

interface LoginProps {
  props: PaperProps;
}
const Login: React.FC<LoginProps> = ({ props }) => {
  return (
    <Box px="md" py="xl">
      <Paper className={styles.formPaper} withBorder {...props}>
        <Text size="lg" fw={500}>
          Welcome back,
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
          </Stack>

          <Group justify="space-between" mt="xl">
            <Anchor
              component={Link}
              href="/signup"
              type="button"
              c="dimmed"
              size="xs"
            >
              Don&apos;t have an account? Register
            </Anchor>
            <Button type="submit" radius="xl">
              Login
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

export default Login;
