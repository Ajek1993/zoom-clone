import { StreamVideoProvider } from "@/providers/StreamClientPriovider";
import React, { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <main>
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  );
}
