"use client";

import { Box, Container } from "@chakra-ui/react";
import Link from "next/link";
import { PositionHolder } from "./position-holder";
import { MenuRoot } from "./menu";
import { ebGaramond } from "./fonts";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const pathname = usePathname();

  const isActive = (path) => {
    return pathname === path;
  };

  return (
    <Box
      as="nav"
      role="navigation"
      bg="#FAD02C"
      position="sticky"
      top="0"
      zIndex="sticky"
    >
      <Container>
        <PositionHolder minH="20">
          <MenuRoot>
            <div className="flex items-center w-[50%]">
              <div className="mr-auto">
                <Link
                  href="/"
                  className={`${ebGaramond.className} mx-[10px] ${
                    isActive("/") ? "underline" : ""
                  }`}
                >
                  Home
                </Link>
                <Link
                  href="/about-us"
                  className={`${ebGaramond.className} mx-[10px] ${
                    isActive("/about-us") ? "underline" : ""
                  }`}
                >
                  About Us
                </Link>
                {/* <Link
                  href="/get-involved"
                  className={`${ebGaramond.className} mx-[10px] ${
                    isActive("/get-involved") ? "underline" : ""
                  }`}
                >
                  Events
                </Link> */}
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