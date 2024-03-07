import type { Metadata } from "next";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { ToastContainer } from "react-toastify";

import Navbar from "@/components/navbar";

import QueryProvider from "@/providers/query-provider";

import { UserSessionContextProvider } from "@/context/user-session-context";
import { AppContextProvider } from "@/context/app-context";

import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import "@mantine/dates/styles.css";

import "./globals.css";

export const metadata: Metadata = {
  title: "Car Go Rentals",
  description: "Rent Cars anywhere. Hop in, ride On.",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>

      <body>
        <QueryProvider>
          <MantineProvider>
            <AppContextProvider>
              <UserSessionContextProvider>
                <Navbar />
                {children}
                <ToastContainer />
              </UserSessionContextProvider>
            </AppContextProvider>
          </MantineProvider>
        </QueryProvider>
      </body>
    </html>
  );
};

export default RootLayout;
