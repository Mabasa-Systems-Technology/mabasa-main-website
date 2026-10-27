"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

/** The client login is a standalone screen, so the site header and footer are left out there. */
export function HideOnPortal({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  return pathname === "/login" ? null : <>{children}</>;
}
