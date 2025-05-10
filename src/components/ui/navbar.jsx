"use client";

import { Box, Container } from "@chakra-ui/react";
import Link from "next/link";
import { PositionHolder } from "./position-holder";
import { MenuRoot } from "./menu";
import { montserrat } from "./fonts";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
import { usePathname } from "next/navigation";
import Image from "next/image";

export const Navbar = () => {
  const pathname = usePathname();

  const isActive = (path) => {
    return pathname === path;
  };

  return (
    <Box
      as="nav"
      role="navigation"
      bg="#f1b051"
      position="sticky"
      top="0"
      zIndex="sticky"
    >
      <Container>
        <PositionHolder minH="20">
          <MenuRoot>
            <div className="flex w-[100%] justify-between items-center">
              <Image
                src="/images/ymg-logo-white.png"
                alt="YMG Logo"
                width={80}
                height={80}
                className="hidden md:block"
              />
              <div className="flex flex-row">
                <Link
                  href="/"
                  className={`${montserrat.className} mx-2 ${
                    isActive("/") ? "underline" : ""
                  }`}
                >
                  Home
                </Link>
                <Link
                  href="/about-us"
                  className={`${montserrat.className} mx-2 ${
                    isActive("/about-us") ? "underline" : ""
                  }`}
                >
                  About
                </Link>
                <Link
                  href="/donate"
                  className={`${montserrat.className} mx-2 ${
                    isActive("/donate") ? "underline" : ""
                  }`}
                >
                  Donate
                </Link>
              </div>
              <div className="flex flex-row">
                <a
                  href="https://www.facebook.com/YMGMovement"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-[10px]"
                >
                  <BsFacebook size={24} />
                </a>
                <a
                  href="https://www.youtube.com/@ymgmovement6738"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-[10px]"
                >
                  <BsYoutube size={24} />
                </a>
                <a
                  href="https://www.instagram.com/ymgmovement/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-[10px]"
                >
                  <BsInstagram size={24} />
                </a>
              </div>
            </div>
          </MenuRoot>
        </PositionHolder>
      </Container>
    </Box>
  );
};
