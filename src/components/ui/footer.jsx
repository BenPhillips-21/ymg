import { Box, Container } from "@chakra-ui/react";
import { PositionHolder } from "./position-holder";
import { ebGaramond } from "./fonts";

export const Footer = (props) => {
  return (
    <Box as="footer" role="contentinfo" bg="#E9EAEC" {...props}>
      <Container>
        <PositionHolder minH="20" className={ebGaramond.className}>
          <p className="text-center">
            "The thief cometh not, but for to steal, and to kill, and to destroy: I
            am come that they might have life, and that they might have it more
            abundantly." - John 10:10
          </p>
        </PositionHolder>
      </Container>
    </Box>
  );
};