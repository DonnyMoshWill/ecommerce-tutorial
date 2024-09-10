"use client";
import React, { useState } from "react";
import { LogoLink } from "./Navbar/LogoLink";
import { DesktopNavLinks } from "./Navbar/DesktopNavLinks";
import { MobileMenuButton } from "./Navbar/MobileMenuButton";
import { MobileDrawer } from "./Navbar/MobileDrawer";
import { LinkDescription } from "../../schemas/common";

export function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  const links: LinkDescription[] = [
    {
      text: "Home",
      path: "/",
    },
    {
      text: "Buy Now",
      path: "/",
    },
  ];
  return (
    <>
      <div className="hidden relative py-6 sm:flex flex-col justify-center">
        <LogoLink />
        <DesktopNavLinks links={links} />
      </div>
      <div className="sm:hidden relative flex flex-row my-4">
        <LogoLink />
        <MobileMenuButton onClick={handleDrawerToggle} />
        <MobileDrawer
          links={links}
          isOpen={isDrawerOpen}
          onClose={handleDrawerToggle}
        />
      </div>
    </>
  );
}
