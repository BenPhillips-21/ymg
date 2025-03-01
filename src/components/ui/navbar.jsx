'use client';

import { Box, Container } from "@chakra-ui/react";
import { PositionHolder } from "./position-holder";
import Link from 'next/link';
import {
  MenuRoot,
} from "@/components/ui/menu";

export const Navbar = () => {
  return (
    <Box as="nav" role="navigation" bg="blue" position="sticky" top="0" zIndex="sticky">
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
              Events
            </Link>
          </MenuRoot>
        </PositionHolder>
      </Container>
    </Box>
  );
};