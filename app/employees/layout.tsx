import ClientProtectedAdminWrapper from "@/components/auth/client-protected-admin-wrapper";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Employees – Jakala Skill Matrix",
  description: "Secure interface for managing and visualizing employee skills.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function EmployeesLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return <ClientProtectedAdminWrapper>{children}</ClientProtectedAdminWrapper>;
}
