"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Session, User } from "@supabase/supabase-js";

interface UserSessionContextProviderProps {
  children: React.ReactNode;
}

interface IUserSessionContext {
  user?: User;
  session: Session | null;
}

export const UserSessionContext = createContext<IUserSessionContext>(
  null as any
);

export const UserSessionContextProvider = ({
  children,
}: UserSessionContextProviderProps) => {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | undefined>(undefined);

  const supabase = createClientComponentClient();

  // subscribing to auth state change
  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        setSession(session);
        setUser(session?.user);
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [supabase.auth]);

  return (
    <UserSessionContext.Provider value={{ user, session }}>
      {children}
    </UserSessionContext.Provider>
  );
};

export const useUserSessionContext = () => {
  return useContext(UserSessionContext);
};
