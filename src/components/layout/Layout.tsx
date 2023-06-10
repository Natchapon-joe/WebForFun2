import React, { ReactNode } from "react";
import Image from "next/image";
import { downloadapp } from "@/assets/images";
import FooterLayout from "./footerLayout";
import NavbarLayout from "./navbarLayout";
interface LayoutProp {
  children: ReactNode;
}
export default function Layout({ children }: LayoutProp) {
  return (
    <>
      <NavbarLayout />
      <main>{children}</main>
      <FooterLayout />
    </>
  );
}
