import { Box, Container } from "@chakra-ui/react";
import { PositionHolder } from "./position-holder";
import { montserrat } from "./fonts";

export const Footer = (props) => {
  return (
    <Box as="footer" role="contentinfo" bg="#E9EAEC" {...props}>
      <Container>
        <PositionHolder minH="20" className={montserrat.className}>
          <p className="text-center">
            "I have come that they may have life, and have it to the full." - John 10:10
          </p>
        </PositionHolder>
      </Container>
    </Box>
  );
};