import type { Metadata } from "next";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { ToastContainer } from "react-toastify";

import Navbar from "@/components/navbar";

import { UserSessionContextProvider } from "@/context/user-session-context";

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
        <MantineProvider>
          <UserSessionContextProvider>
            <Navbar />
            {children}
            <ToastContainer />
          </UserSessionContextProvider>
        </MantineProvider>
      </body>
    </html>
  );
};

export default RootLayout;
