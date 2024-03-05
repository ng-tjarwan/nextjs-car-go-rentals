"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Anchor,
  Box,
  Button,
  Checkbox,
  Divider,
  Group,
  LoadingOverlay,
  Paper,
  PasswordInput,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { toast } from "react-toastify";

import GoogleButton from "./google-button";
import Logo from "@/components/navbar/logo";
import EmailConfirmation from "@/components/email-confirmation";

import { useSignupForm } from "@/hooks/useSignupForm";

import { signupWithEmailPassword } from "@/services/auth.service";

import styles from "./styles.module.css";

const SignUp = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useSignupForm();

  const handleSignup = async () => {
    const { email, password } = form.values;

    setIsSubmitting(true);
    const { error } = await signupWithEmailPassword(email, password);
    setIsSubmitting(false);

    if (error) {
      console.log(error);
      toast.error("Error Signing you up");
    } else {
      setIsSubmitted(true);
      toast.success(
        "Signup Successful. Please check your email to verify your account"
      );
    }
  };

  return (
    <>
      {isSubmitted ? (
        <EmailConfirmation email={form.values.email} />
      ) : (
        <>
          <LoadingOverlay
            visible={isSubmitting}
            overlayProps={{ radius: "sm", blur: 2 }}
          />
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

              <form onSubmit={form.onSubmit(() => handleSignup())}>
                <Stack>
                  <TextInput
                    required
                    label="Email"
                    placeholder="heelp@cargo.com"
                    radius="md"
                    value={form.values.email}
                    onChange={(event) =>
                      form.setFieldValue("email", event.currentTarget.value)
                    }
                    error={form.errors.email && form.errors.email}
                  />

                  <PasswordInput
                    required
                    label="Password"
                    placeholder="Your password"
                    radius="md"
                    value={form.values.password}
                    onChange={(event) =>
                      form.setFieldValue("password", event.currentTarget.value)
                    }
                    error={form.errors.password && form.errors.password}
                  />

                  <PasswordInput
                    required
                    label="Confirm Password"
                    placeholder="Confirm your password"
                    radius="md"
                    value={form.values.confirmPassword}
                    onChange={(event) =>
                      form.setFieldValue(
                        "confirmPassword",
                        event.currentTarget.value
                      )
                    }
                    error={
                      form.errors.confirmPassword && form.errors.confirmPassword
                    }
                  />

                  <Checkbox
                    label="I accept teams and conditions"
                    checked={form.values.terms}
                    onChange={(event) =>
                      form.setFieldValue("terms", event.currentTarget.checked)
                    }
                    error={form.errors.terms && form.errors.terms}
                  />
                </Stack>

                <Group justify="space-between" mt="xl">
                  <Anchor
                    component={Link}
                    href="/login"
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
        </>
      )}
    </>
  );
};

export default SignUp;
