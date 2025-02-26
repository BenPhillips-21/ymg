'use client';

import { Box, Container } from "@chakra-ui/react";
import { PositionHolder } from "./position-holder";
import Link from 'next/link';
import {
  MenuRoot,
} from "@/components/ui/menu";

export const Navbar = () => {
  return (
    <Box as="nav" role="navigation" bg="blue">
      <Container>
        <PositionHolder minH="20">
          <MenuRoot>
            <Link href="/" className="mx-[10px]">
              Home
            </Link>
            <Link href="/about-us" className="mx-[10px]">
              About Us
            </Link>
            <Link href="/get-involved" className="mx-[10px]">
              Get Involved
            </Link>
            <Link href="/contact-us" className="mx-[10px]">
              Contact Us
            </Link>
            <Link href="/news" className="mx-[10px]">
              News
            </Link>
          </MenuRoot>
        </PositionHolder>
      </Container>
    </Box>
  );
};