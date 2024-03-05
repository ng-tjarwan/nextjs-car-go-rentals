import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const supabase = createClientComponentClient();

export const signupWithEmailPassword = async (
  email: string,
  password: string
) => {
  return await supabase.auth.signUp({ email, password });
};

export const logInWithEmailPassword = async (
  email: string,
  password: string
) => {
  return await supabase.auth.signInWithPassword({
    email,
    password,
  });
};

export const logOut = async () => {
  return await supabase.auth.signOut();
};
